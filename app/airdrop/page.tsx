"use client";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/navigation";
import { Airdrop } from "@/components/ui/Airdrop";
import { WalletProvider } from "@solana/wallet-adapter-react";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { useEffect, useState, Suspense } from "react";
import { ScaleLoader } from "react-spinners";

const network = "mainnet-beta"; 
const endpoint = clusterApiUrl(network);

export default function AirdropPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const token = searchParams ? searchParams.get("token") : null;

    useEffect(() => {
        const fetchToken = async () => {
            if (!token) {
                router.push("/"); // Redirige a la página de inicio si no se proporciona un token
                return;
            }

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/airdrop/validate`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok || !data.success) {
                    setMessage(data.message || "Validation failed");
                    setError(true);
                } else {
                    setMessage(data.message || "Token is valid");
                    setError(false); // Limpia el estado de error
                }
            } catch (error) {
                setMessage("Error validating token");
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchToken();
    }, [token]);

    const wallets = [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <ScaleLoader color="#4A90E2" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>{message}</p>
            </div>
        );
    }

    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><ScaleLoader color="#4A90E2" /></div>}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <Airdrop token={token!} />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </Suspense>
    );
}

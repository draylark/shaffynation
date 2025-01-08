import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Connection, Transaction } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Image from "next/image";

const QUICKNODE_RPC_URL = process.env.NEXT_PUBLIC_NODE_URL!;
const connection = new Connection(QUICKNODE_RPC_URL, "confirmed");

export function Airdrop({ token }: { token: string }) {
    const { publicKey, connected, signTransaction } = useWallet();

    const [status, setStatus] = useState<"idle" | "validating" | "signing" | "success" | "error" | "canceled">("idle");
    const [message, setMessage] = useState("");
    const [transactionId, setTransactionId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setMessage("Transaction ID copied to clipboard!");
        setTimeout(() => setMessage(""), 2000);
    };

    const handleWalletConnected = async (walletAddress) => {
        if (loading) return;
    
        setLoading(true);
        setStatus("validating");
        setMessage("Validating eligibility...");
    
        try {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/airdrop/claim`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ walletAddress: walletAddress.toString(), token }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Wallet is not eligible for the airdrop.");
            }
    
            const { transaction } = await response.json();
            setStatus("signing");
            setMessage("Signing transaction...");
    
            const transactionObject = Transaction.from(Buffer.from(transaction, "base64"));
    
            const signedTransaction = await signTransaction(transactionObject);
    
            const signature = await connection.sendRawTransaction(signedTransaction.serialize(), {
                skipPreflight: false,
                preflightCommitment: "processed",
            });
    
            setMessage("Confirming the transaction...");
            const latestBlockhash = await connection.getLatestBlockhash("confirmed");
            const confirmation = await connection.confirmTransaction(
                {
                    signature: signature,
                    blockhash: latestBlockhash.blockhash,
                    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
                },
                "processed"
            );
    
            if (confirmation.value.err) {
                throw new Error("Transaction failed. Please try again.");
            }
    

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/airdrop/success`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ walletAddress: walletAddress.toString() }),
            });

            setTransactionId(signature);
            setStatus("success");
            setMessage("Airdrop successful!");
        } catch (error) {
            if (error.message.includes("User rejected")) {
                
                setStatus("canceled");
                setMessage("Transaction was canceled by the user.");
            } else {
                
                console.log("Error:", error);
                setStatus("error");
                setMessage("An unexpected error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col gap-2">
                <WalletMultiButton className="w-full" />
                <Card>
                    <CardHeader>
                        <CardTitle>$SHAFFY Airdrop</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Claim a 10,000 $SHAFFY airdrop now!</CardDescription>
                        <div className="flex flex-col items-center gap-5 py-5">
                            <div className="w-[10rem] h-[10rem] border-2 relative rounded-2xl overflow-hidden">
                                <Image src="/shaffy.webp" alt="Airdrop" fill />
                            </div>
                            <div className="flex flex-col items-center">
                                <p className={`text-xl text-white`}>$SHAFFY</p>
                                <p className="text-sm text-neutral-500">10,000</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col w-full justify-center items-center gap-2 max-w-[230px]">
                            {!connected ? (
                                
                                <p className="text-neutral-500 text-sm">
                                    Connect your wallet to claim the airdrop.
                                </p>
                            ) : loading ? (
                                
                                <p className="text-sm text-neutral-500">{message}</p>
                            ) : status === "success" ? (
                                
                                <div className="flex flex-col items-center">
                                    <p className="text-green-500">Airdrop successful!</p>
                                    {transactionId && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-neutral-400 text-xs">
                                                Transaction ID: {`${transactionId.slice(0, 6)}...${transactionId.slice(-6)}`}
                                            </span>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleCopyToClipboard(transactionId)}
                                            >
                                                Copy
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : status === "error" ? (                          
                                <p className="text-red-500">{message}</p>
                            ) : status === "canceled" ? (                    
                                <p className="text-yellow-500">{message}</p>
                            ) : (                    
                                <Button onClick={() => handleWalletConnected(publicKey)}>
                                    Claim Airdrop
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

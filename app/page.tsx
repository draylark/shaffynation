import { PresentationGradient } from "@/components/ui/PresentationGradient";
import About from "@/components/ui/About";
import { ObjectivesTimeline } from "@/components/ui/ObjectivesTimeline";

export default function Home() {
  return (
    <div className="min-h-screen ">
        <PresentationGradient/>
        <About/>
        <ObjectivesTimeline/>
    </div>
  );
}

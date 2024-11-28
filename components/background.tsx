import FlickeringGrid from "@/components/ui/flickering-grid";

export function BgImage() {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1600}
        width={1500}
      />
    </div>
  );
}

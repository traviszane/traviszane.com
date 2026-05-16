import backdrop from "@/assets/scene-backdrop.jpg";

export function SceneBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <img
        src={backdrop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15 dark:opacity-55 pixelated"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background dark:from-background/40 dark:via-background/70 dark:to-background" />
      <div className="absolute inset-0 grid-overlay opacity-30 dark:opacity-50" />
      <div className="absolute inset-0 scanlines opacity-0 dark:opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}

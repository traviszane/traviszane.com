export function CrtOverlay() {
  return (
    <div
      aria-hidden
      className="crt-overlay fixed inset-0 z-[100] mix-blend-overlay opacity-40 pointer-events-none"
      style={{ animation: "flicker 6s infinite" }}
    />
  );
}

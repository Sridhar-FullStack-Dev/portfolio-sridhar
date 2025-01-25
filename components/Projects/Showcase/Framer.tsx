export default function Framer() {
  return (
    <video autoPlay loop muted preload="none" aria-label="Video player">
      <source src="/Projects/showcase/framer.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function CinemaPoint() {
  return (
    <video autoPlay loop muted preload="none" aria-label="Video player">
      <source src="/Projects/showcase/cinemapoint.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

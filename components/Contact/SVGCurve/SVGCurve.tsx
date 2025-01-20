export default function SVGCurve({
  paths,
}: {
  paths: React.MutableRefObject<SVGTextPathElement[]>;
}) {
  return (
    <div className="houseMontage-font tracking-wide">
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ fill: "white" }}>
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => {
                if (ref) {
                  paths.current[i] = ref;
                }
              }}
              startOffset={`${i * 40}%`}
              href="#curve"
            >
              Dont&apos;t hesitate let&apos;s connect ! •
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
}

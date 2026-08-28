interface SparklineProps {
  data: number[];
  /** Words-based trend summary exposed to assistive tech; the SVG itself is decorative-only. */
  label: string;
  strokeClassName?: string;
  className?: string;
}

/** Minimal inline trend line. Not a precise chart — colored stroke only, per design intent. */
export function Sparkline({ data, label, strokeClassName = "stroke-teal", className }: SparklineProps) {
  const width = 100;
  const height = 32;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div role="img" aria-label={label} className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
        className="h-8 w-full"
        preserveAspectRatio="none"
      >
        <polyline
          points={points}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={strokeClassName}
        />
      </svg>
    </div>
  );
}

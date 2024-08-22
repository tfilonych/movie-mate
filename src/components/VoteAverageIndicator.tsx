type VoteAverageIndicatorProps = {
  voteAverage: number;
};

const VoteAverageIndicator = ({ voteAverage }: VoteAverageIndicatorProps) => {
  const percentage = Math.round(voteAverage * 10); // Convert to percentage
  const radius = 45;
  const circ = 2 * Math.PI * radius;
  const strokePct = ((100 - percentage) * circ) / 100;

  return (
    <div className="relative my-4 flex h-12 w-12 items-center justify-center">
      <svg
        className="absolute h-full w-full -rotate-90 transform"
        viewBox="0 0 100 100"
      >
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="none"
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className="text-teal-400"
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={strokePct}
          stroke="currentColor"
          fill="none"
          cx="50"
          cy="50"
          r={radius}
        />
      </svg>
      <div className="text-md absolute flex h-full w-full items-center justify-center font-bold text-white">
        {percentage}%
      </div>
    </div>
  );
};

export default VoteAverageIndicator;

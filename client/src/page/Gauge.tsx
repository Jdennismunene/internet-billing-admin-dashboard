

type GaugeProps = {
  value: number;
  label: string;
  color: string;
  icon: React.ReactNode;
};

const Gauge: React.FC<GaugeProps> = ({
  value,
  label,
  color,
  icon,
}) => {
  const max = 80;

  const percentage = value / max;

  const radius = 42;
  const circumference = Math.PI * radius;

  const offset =
    circumference - percentage * circumference;

  const labels = [0, 20, 40, 60, 80];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[130px] h-[85px]">

        {/* SVG */}
        <svg
          viewBox="0 0 140 90"
          className="w-full h-full"
        >
          {/* Background Arc */}
          <path
            d="M20 70 A50 50 0 0 1 120 70"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Active Arc */}
          <path
            d="M20 70 A50 50 0 0 1 120 70"
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: "0.5s ease",
            }}
          />

          {/* Labels */}
          {labels.map((num, index) => {
            const angle =
              (-180 + (index * 180) / (labels.length - 1)) *
              (Math.PI / 180);

            const x = 70 + Math.cos(angle) * 58;
            const y = 70 + Math.sin(angle) * 58;

            return (
              <text
                key={num}
                x={x}
                y={y}
                textAnchor="middle"
                className="fill-gray-400 text-[8px]"
              >
                {num === 80 ? "80+" : num}
              </text>
            );
          })}
        </svg>

        {/* Center Value */}
        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <div className="bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {value}
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Gauge;
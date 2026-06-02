

type ProgressBarProps = {
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
}) => {
  return (
    <div className="w-full bg-gray-200 rounded-md h-6 overflow-hidden">
      <div
        className="bg-orange-500 h-full flex items-center justify-center text-white text-sm font-medium transition-all duration-500 rounded-md"
        style={{
          width: `${value}%`,
        }}
      >
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
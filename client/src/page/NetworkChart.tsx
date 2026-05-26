import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "02", upload: 78, download: 60 },
  { time: "03", upload: 38, download: 35 },
  { time: "04", upload: 32, download: 28 },
  { time: "05", upload: 62, download: 63 },
  { time: "06", upload: 48, download: 43 },
  { time: "07", upload: 73, download: 82 },
  { time: "08", upload: 65, download: 76 },
  { time: "09", upload: 55, download: 78 },
  { time: "10", upload: 62, download: 58 },
  { time: "11", upload: 51, download: 42 },
  { time: "12", upload: 70, download: 63 },
  { time: "13", upload: 45, download: 55 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111827] text-white rounded-2xl p-4 shadow-xl border border-gray-700">
        <p className="text-sm mb-3">{label}:44 am</p>

        <div className="flex items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span>Upload speed</span>
          </div>

          <span>{payload[0].value} Mbps</span>
        </div>

        <div className="flex items-center justify-between gap-6 text-sm mt-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-900 rounded-full" />
            <span>Download speed</span>
          </div>

          <span>{payload[1].value} Mbps</span>
        </div>
      </div>
    );
  }

  return null;
};

function NetworkChart() {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 p-6">

      {/* Top */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-500 text-sm">
          Network Performance
        </h2>

        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm outline-none">
          <option>24 Hour</option>
          <option>7 Days</option>
          <option>30 Days</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Download */}
            <Area
              type="monotone"
              dataKey="download"
              stroke="#164e63"
              fill="#164e63"
              fillOpacity={0.08}
              strokeWidth={3}
            />

            {/* Upload */}
            <Area
              type="monotone"
              dataKey="upload"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.12}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Legends */}
      <div className="flex items-center justify-center gap-8 mt-4 text-sm text-gray-500">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full" />
          <span>Upload speed</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-900 rounded-full" />
          <span>Download speed</span>
        </div>

      </div>
    </div>
  );
}

export default NetworkChart;
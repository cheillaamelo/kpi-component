import React from "react";

interface KPIProps {
  label: string;
  value: number;
  icon?: string;
  trend?: number; // Variação percentual
}

const KPI: React.FC<KPIProps> = ({ label, value, icon = "📊", trend }) => {
  const isPositive = trend !== undefined && trend >= 0;

  return (
    <div className="border p-4 rounded shadow-sm w-full bg-white hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-1 text-gray-500 text-sm">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      {trend !== undefined && (
        <div
          className={`mt-1 text-sm font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? "🔺" : "🔻"} {trend > 0 ? "+" : ""}
          {trend.toFixed(1)}%
        </div>
      )}
    </div>
  );
};

export default KPI;

import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import './RadixChart.css';

// Colores
const COLORS = {
  Alimentacion: "#10b981",
  Entretenimiento: "#8b5cf6",
  Otros: "#6b7280",
  Transporte: "#f59e0b",
  Vivienda: "#2563eb",
  Salud: "#ef4444",
};

const RadixChart = ({ data }) => {
  const chartData = useMemo(() => {
    if (!data || data.length === 0) return [];

    // agrupa y suma montos por categoria
    const categoriesMap = data.reduce((acc, item) => {
      // normaliza categoria
      const cat = item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1).toLowerCase();
      const monto = parseFloat(item.monto);

      // si la categoria no esta en el mapa, la inicializa
      if (!acc[cat]) {
        acc[cat] = 0;
      }
      // suma el monto a la categoria correspondiente
      acc[cat] += monto;
      return acc;
    }, {});

    // convertir el mapa al formato que pide Recharts
    return Object.keys(categoriesMap).map((key) => ({
      name: key,
      value: categoriesMap[key],
    }));
  }, [data]);

  return (
      <div className="chart-wrapper">
        <h2 className="chart-title">Gastos por Categoria</h2>
        <ResponsiveContainer width="100%" height="100%" className="container">
          <PieChart>
            <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={0} 
            outerRadius={150}
            paddingAngle={0}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[entry.name] || "#CBD5E1"} 
              />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => `S./${value.toFixed(2)}`}
          />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
        </ResponsiveContainer>
      </div>
  );
};

export default RadixChart;
import './chart.css';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer aspect={4 / 1} width="100%">
        <LineChart data={data} style={{ fontFamily: 'Source Sans Pro' }}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line dataKey={dataKey} stroke="#5550bd" type="monotone" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

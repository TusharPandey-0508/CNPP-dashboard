import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

// ✅ Custom label to ensure numbers always visible
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius + 15 // push labels slightly outside
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {value}
    </text>
  )
}

export default function WidgetCard({ widget, onRemove }) {
  return (
    <div className="widget-card">
      <div className="widget-top">
        <h4 className="widget-title">{widget.title}</h4>
        <button className="remove" title="Remove" onClick={onRemove}>✕</button>
      </div>

      <div className="widget-content">
        {widget.type === 'donut' ? (
          <PieChart width={240} height={200}>
            <Pie
              data={widget.data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              label={renderCustomLabel} // ✅ custom label renderer
              labelLine={false}
            >
              {widget.data && widget.data.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={widget.colors?.[idx % (widget.colors?.length || 2)] || '#8884d8'}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        ) : widget.type === 'bar' ? (
          <div className="bar-placeholder">
            <div className="bar-label">{widget.content}</div>
            <div className="bar">
              <div className="bar-fill" style={{ width: '60%' }}></div>
            </div>
          </div>
        ) : (
          <div className="empty-slot">
            <div className="plus">+</div>
            <div className="add-text">Add Widget</div>
          </div>
        )}
      </div>
    </div>
  )
}

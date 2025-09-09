// import React from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// export default function WidgetCard({ widget, onRemove }) {
//   return (
//     <div className="widget-card">
//       <div className="widget-top">
//         <h4 className="widget-title">{widget.title}</h4>
//         <button className="remove" title="Remove" onClick={onRemove}>
//           ✕
//         </button>
//       </div>

//       <div className="widget-content">
//         {widget.type === 'donut' && widget.data ? (
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={widget.data}
//                 dataKey="value"
//                 cx="50%"
//                 cy="45%"
//                 innerRadius={40}
//                 outerRadius={60}
//                 paddingAngle={2}
//                 label
//               >
//                 {widget.data.map((entry, idx) => (
//                   <Cell
//                     key={idx}
//                     fill={
//                       widget.colors?.[idx % (widget.colors?.length || 2)] ||
//                       '#8884d8'
//                     }
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend verticalAlign="bottom" height={24} />
//             </PieChart>
//           </ResponsiveContainer>
//         ) : widget.type === 'bar' ? (
//           <div className="bar-placeholder">
//             <div className="bar-label">{widget.content}</div>
//             <div className="bar">
//               <div className="bar-fill" style={{ width: '60%' }}></div>
//             </div>
//           </div>
//         ) : (
//           <div className="empty-slot">
//             <div className="plus">+</div>
//             <div className="add-text">Add Widget</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function WidgetCard({ widget, onRemove }) {
  return (
    <div className="widget-card">
      <div className="widget-top">
        <h4 className="widget-title">{widget.title}</h4>
        <button className="remove" title="Remove" onClick={onRemove}>
          ✕
        </button>
      </div>

      <div className="widget-content">
        {widget.type === 'donut' && widget.data ? (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={widget.data}
                dataKey="value"
                cx="50%"
                cy="50%"              // ✅ Center vertically
                innerRadius="40%"     // ✅ Responsive radius
                outerRadius="60%"     // ✅ Responsive radius
                paddingAngle={2}
                label
              >
                {widget.data.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={
                      widget.colors?.[idx % (widget.colors?.length || 2)] ||
                      '#8884d8'
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={24} />
            </PieChart>
          </ResponsiveContainer>
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
  );
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeWidget, addWidget } from '../features/dashboardSlice'

export default function CategoryManager(){
  const categories = useSelector(s => s.dashboard.categories)
  const dispatch = useDispatch()

  const toggleWidget = (categoryId, widget, checked) => {
    if (!checked) {
      dispatch(removeWidget({ categoryId, widgetId: widget.id }))
    } else {
      dispatch(addWidget(categoryId, widget.title, widget.content, widget.type, widget.data, widget.colors))
    }
  }

  return (
    <div className="category-manager">
      <h3>Manage Categories</h3>
      {categories.map(cat=>(
        <div key={cat.id} className="cat-manager-section">
          <h4>{cat.name}</h4>
          {cat.widgets.length === 0 ? (
            <div className="muted">No widgets</div>
          ) : (
            cat.widgets.map(w=>(
              <label key={w.id} className="widget-checkbox">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={(e)=>toggleWidget(cat.id, w, e.target.checked)}
                />
                {w.title}
              </label>
            ))
          )}
        </div>
      ))}
    </div>
  )
}

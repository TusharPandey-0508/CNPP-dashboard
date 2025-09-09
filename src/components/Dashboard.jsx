import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addWidget, removeWidget, setSearch } from '../features/dashboardSlice'
import AddWidgetModal from './AddWidgetModal'
import WidgetCard from './WidgetCard'
import SearchBar from './SearchBar'
import CategoryManager from './CategoryManager'

export default function Dashboard(){
  const categories = useSelector(s => s.dashboard.categories)
  const search = useSelector(s => s.dashboard.search)
  const dispatch = useDispatch()

  const [modalOpen, setModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  const openAdd = (categoryId) => {
    setActiveCategory(categoryId)
    setModalOpen(true)
  }

  const onAdd = (title, content, type) => {
    if (!activeCategory) return
    const payloadType = type || 'empty'
    const data = payloadType === 'donut' ? [{name:'A', value:1},{name:'B', value:2}] : []
    const colors = payloadType === 'donut' ? ['#2E6FD8','#E6E9EF'] : []
    dispatch(addWidget(activeCategory, title, content, payloadType, data, colors))
    setModalOpen(false)
    setActiveCategory(null)
  }

  const handleRemove = (categoryId, widgetId) => {
    if(!confirm('Remove this widget?')) return
    dispatch(removeWidget({ categoryId, widgetId }))
  }

  return (
    <div className="dashboard">
      <div className="topbar">
        <h2>CNAPP Dashboard</h2>
        <SearchBar value={search} onChange={(v)=>dispatch(setSearch(v))} />
      </div>

      <div className="categories">
        {categories.map(cat=>{
          const widgetsToShow = search
            ? cat.widgets.filter(w =>
                (w.title || '').toLowerCase().includes(search.toLowerCase()) ||
                (w.content || '').toLowerCase().includes(search.toLowerCase())
              )
            : cat.widgets

          return (
            <div key={cat.id} className="category">
              <div className="category-header">
                <h3>{cat.name}</h3>
                <button className="add-btn" onClick={()=>openAdd(cat.id)}>+ Add Widget</button>
              </div>

              <div className="widgets-grid">
                {widgetsToShow.length === 0 ? (
                  <div className="empty">{search ? 'No matching widgets' : 'No widgets. Click + Add Widget to add one.'}</div>
                ) : (
                  widgetsToShow.map(w=>(
                    <WidgetCard key={w.id} widget={w} onRemove={()=>handleRemove(cat.id, w.id)} />
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>

      <CategoryManager />

      <AddWidgetModal isOpen={modalOpen} onClose={()=>setModalOpen(false)} onAdd={onAdd} />
    </div>
  )
}

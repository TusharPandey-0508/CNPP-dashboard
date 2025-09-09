import React, { useState, useEffect } from 'react'

export default function AddWidgetModal({ isOpen, onClose, onAdd }){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [type, setType] = useState('donut')

  useEffect(()=> {
    if(isOpen){
      setTitle('')
      setContent('')
      setType('donut')
    }
  }, [isOpen])

  if(!isOpen) return null

  const submit = (e) => {
    e.preventDefault()
    if(title.trim() === '') { alert('Please enter widget name'); return }
    onAdd(title, content || 'Random text', type)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Widget</h3>
        <form onSubmit={submit}>
          <label>Widget Name</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Widget title" />
          <label>Widget Text</label>
          <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Some description" />
          <label>Type</label>
          <div className="type-row">
            <label><input type="radio" name="type" value="donut" checked={type==='donut'} onChange={()=>setType('donut')} /> Donut</label>
            <label><input type="radio" name="type" value="bar" checked={type==='bar'} onChange={()=>setType('bar')} /> Bar</label>
            <label><input type="radio" name="type" value="empty" checked={type==='empty'} onChange={()=>setType('empty')} /> Empty</label>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

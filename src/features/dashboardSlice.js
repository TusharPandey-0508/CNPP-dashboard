import { createSlice, nanoid } from '@reduxjs/toolkit'
import initialData from '../data/dashboard.json'

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload
        const cat = state.categories.find(c => c.id === categoryId)
        if (cat) cat.widgets.push(widget)
      },
      prepare(categoryId, title, content, type, data, colors) {
        return {
          payload: {
            categoryId,
            widget: {
              id: nanoid(),
              title,
              content,
              type: type || 'empty',
              data: data || [],
              colors: colors || []
            }
          }
        }
      }
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
    },
    addCategory(state, action) {
      state.categories.push({ id: nanoid(), name: action.payload.name, widgets: [] })
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    updateWidget(state, action) {
      const { categoryId, widgetId, updates } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (!cat) return
      const w = cat.widgets.find(x => x.id === widgetId)
      if (w) Object.assign(w, updates)
    }
  }
})

export const { addWidget, removeWidget, addCategory, setSearch, updateWidget } = dashboardSlice.actions
export default dashboardSlice.reducer

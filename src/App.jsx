import React from 'react'
import Dashboard from './components/Dashboard'
import CategoryManager from './components/CategoryManager'

export default function App(){
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dashboard</h1>
      </header>
      <main className="main">
        
        <section className="content">
          <Dashboard />
        </section>
      </main>
    </div>
  )
}

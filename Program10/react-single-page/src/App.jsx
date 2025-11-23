import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="card">
        <header className="header">
          <h1>Welcome to My React SPA</h1>
          <p>A minimal single-page application built with <strong>Vite</strong> and <strong>React</strong>.</p>
        </header>

        <section className="content">
          <p>
            This page demonstrates a lightweight React setup that doesn’t rely on routing —
            everything you see here lives inside a single <code>App.jsx</code> file.
          </p>
          <p>
            You can use this page as a starting point for:
          </p>
          <ul>
            <li>Personal or portfolio landing pages</li>
            <li>Company or product introductions</li>
            <li>Single-page dashboards or information screens</li>
          </ul>
        </section>

        <footer className="footer">
          <p>{new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

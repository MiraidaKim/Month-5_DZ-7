import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout({ children }) {
  
  return (
    <div className="site-layout">
      <header className="site-header">
        <div className="logo">Lookism</div>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/posts">Посты</Link>
        </nav>
      </header>

      <main className="site-content">{children}<Outlet /></main>

      <footer className="site-footer">Yoma_Kim</footer>
    </div>
  )
}
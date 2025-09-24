import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="page not-found">
      <h2>404 — страница не найдена</h2>
      <p>Похоже, такой страницы в блоге Lookism нет.</p>
      <Button onClick={() => navigate('/')}>На главную</Button>
    </div>
  )
}
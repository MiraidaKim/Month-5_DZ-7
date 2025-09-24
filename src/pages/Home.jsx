import React from 'react'
import { Typography } from 'antd'


const { Title, Paragraph } = Typography


export default function Home() {
  return (
    <div className="page home-page">
      <div className="home-hero">
        <div className="home-overlay">
          <Title level={1} className="home-title">Добро пожаловать в Lookism</Title>
          <Paragraph className="home-text">
            Это небольшой блог о популярной манхве <strong>Lookism</strong>. Здесь вы найдёте статьи про сюжет, персонажей и социальные темы произведения.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
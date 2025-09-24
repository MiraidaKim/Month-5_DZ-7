import React from "react";
import "../styles.scss";
import { Card } from "antd";
import { BookOutlined, TeamOutlined, BulbOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <div className="about-page page">
      <h1 className="about-title">О проекте Lookism</h1>
      <p className="about-text">
        Манга <strong>Lookism</strong> исследует мир, где человеческие эмоции
        формируют реальность. Каждый человек оставляет после себя
        «эхо-чувства» — волны, которые влияют на природу, города и даже судьбы
        других людей.
      </p>

      <p className="about-text">
        Этот блог создан для того, чтобы собрать всю информацию о вселенной
        <strong> Lookism</strong>: от сеттинга и фракций до обзоров глав и
        персонажей. Мы хотим, чтобы фанаты могли не только перечитывать мангу,
        но и обсуждать теории, делиться эмоциями и лучше понимать авторский
        замысел.
      </p>

      <div className="about-features">
        <Card className="about-card" hoverable>
          <BookOutlined style={{ fontSize: "28px", color: "#8f7bff" }} />
          <h3>Сюжет</h3>
          <p>Подробные разборы арок и пересказы глав.</p>
        </Card>

        <Card className="about-card" hoverable>
          <TeamOutlined style={{ fontSize: "28px", color: "#8f7bff" }} />
          <h3>Персонажи</h3>
          <p>Знакомство с ключевыми героями и их характерами.</p>
        </Card>

        <Card className="about-card" hoverable>
          <BulbOutlined style={{ fontSize: "28px", color: "#8f7bff" }} />
          <h3>Теории</h3>
          <p>Обсуждение «эхо-чувств» и их роли во вселенной.</p>
        </Card>
      </div>
    </div>
  );
}

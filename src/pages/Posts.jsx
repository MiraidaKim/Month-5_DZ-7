import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { posts as localPosts } from '../data/posts';
import cls from './Posts.module.scss';

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setPosts(localPosts);
      setLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className={cls.centerLoader}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={cls.postsPage}>
      <h2>Посты</h2>

      <Row gutter={[16, 16]}>
        {posts.map((p) => (
          <Col xs={24} sm={12} md={8} key={p.id}>
            <Card
              hoverable
              className={cls.card}
              cover={<img src={p.image} alt={p.title} className={cls.cardImage} />}
            >
              <Card.Meta className={cls.meta} title={p.title} description={p.excerpt} />
              <div className={cls.cardActions}>
                <Link to={`/posts/${p.id}`} className={cls.readBtn}>
                  Читать
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, Spin } from 'antd'
import { posts as localPosts } from '../data/posts'
import styles from './PostDetail.module.scss'

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => {
      const found = localPosts.find(p => p.id === id)
      setPost(found || null)
      setLoading(false)
    }, 600)
    return () => clearTimeout(t)
  }, [id])

  if (loading) return <div className={styles.centerLoader}><Spin size="large" /></div>

  if (!post) {
    return (
      <div className={styles.postNotFound}>
        <h2>Пост не найден</h2>
        <Button onClick={() => navigate('/posts')}>Вернуться к постам</Button>
      </div>
    )
  }

  return (
    <div className={styles.postDetail}>
      <Card cover={<img src={post.image} alt={post.title} />}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </Card>
    </div>
  )
}

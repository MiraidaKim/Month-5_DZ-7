import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout as AntLayout, Spin } from 'antd'
import Layout from './components/Layout'


const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Posts = lazy(() => import('./pages/Posts'))
const PostDetail = lazy(() => import('./pages/PostDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <AntLayout className="app-root">
      <Layout>
        <Suspense fallback={<div className="center-loader"><Spin size="large" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </AntLayout>
  )
}
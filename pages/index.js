import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { getAllPosts } from '../services'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <Layout>
      {posts.map((post,index) => <h3 key={index}>{post.title}</h3>)}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = (await getAllPosts()) || []
  return {
    props: {posts}
  }
}
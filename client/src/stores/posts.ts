import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PostInterface } from '@/interfaces/post.interface'

export const usePostsStore = defineStore('posts', () => {
  const API_URL = 'http://localhost:3000/'
  const posts = ref<PostInterface[]>([])

  async function fetchPosts() {
    const response = await fetch(`${API_URL}posts`)
    posts.value = await response.json()
  }

  function likePost(postId: string) {
    console.log('likePost', postId)

    // debugger
    const post = posts.value.find((post) => post.id === postId)
    if (post) {
      post.isLiked = true
      post.likeCount++
    }
  }

  function unlikePost(postId: string) {
    console.log('unlikePost', postId)

    const post = posts.value.find((post) => post.id === postId)
    if (post) {
      post.isLiked = false
      post.likeCount--
    }
  }

  return { posts, fetchPosts, likePost, unlikePost }
})

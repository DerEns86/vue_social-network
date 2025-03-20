import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { PostInterface } from '@/interfaces/post.interface'

export const usePostsStore = defineStore('posts', () => {
  const API_URL = 'http://localhost:3000/'
  const posts = ref<PostInterface[]>([])
  const userPosts = ref<PostInterface[]>([])

  async function fetchPosts() {
    const response = await fetch(`${API_URL}posts`)
    posts.value = await response.json()
  }

  async function fetchPostsByUserId(userId: string) {
    const response = await fetch(`${API_URL}users/${userId}?_embed=posts`)
    const data = await response.json()
    userPosts.value = data.posts
  }

  function likePost(postId: string) {
    const post = posts.value.find((post) => post.id === postId)
    if (post) {
      post.isLiked = true
      post.likeCount++
    }
  }

  function unlikePost(postId: string) {
    const post = posts.value.find((post) => post.id === postId)
    if (post) {
      post.isLiked = false
      if (post.likeCount > 0) {
        post.likeCount--
      } else {
        post.likeCount = 0
      }
    }
  }

  const likedPosts = computed(() => posts.value.filter((post) => post.isLiked))

  return { posts, fetchPosts, likePost, unlikePost, likedPosts, fetchPostsByUserId, userPosts }
})

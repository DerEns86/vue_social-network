<script setup>
import { onMounted } from 'vue'
import { usePostsStore } from '@/stores/posts'
import { useUserStore } from '@/stores/user'
import PostList from '@/components/PostList.vue'

const postsStore = usePostsStore()
const userStore = useUserStore()

onMounted(async () => {
  await postsStore.fetchPostsByUserId(userStore.currentUser.id)
})
</script>

<template>
  <div>
    <h2>My Posts</h2>
    <PostList :posts="postsStore.userPosts" />
  </div>

  <div>
    <h2>My liked Posts</h2>
    <PostList :posts="postsStore.likedPosts" />
  </div>
</template>

<style scoped></style>

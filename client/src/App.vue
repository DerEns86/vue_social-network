<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useUserStore } from './stores/user'
import { usePostsStore } from './stores/posts'
import MainNavigation from '@/components/MainNavigation.vue'

const userStore = useUserStore()
const postsStore = usePostsStore()

onMounted(async () => {
  await userStore.fetchCurrentUser()
})

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1>Social Network</h1>

    <div>
      <MainNavigation />
    </div>
  </header>
  <div>
    <p>Hello, {{ userStore.currentUser?.username }}</p>
  </div>
  <section>
    <RouterView />
  </section>
</template>

<style scoped></style>

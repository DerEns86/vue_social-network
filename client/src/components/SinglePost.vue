<script setup>
import LikeButton from '@/components/LikeButton.vue'
import { useUserStore } from '@/stores/user'
import { ref, defineProps, onMounted } from 'vue'

const userStore = useUserStore()

const props = defineProps(['post'])

const username = ref('')
const userJoinedAt = ref('')

async function fetchUserName(userId) {
  const user = await userStore.fetchUserById(userId)
  username.value = user.username
}

async function fetchUserJoinedAt(userId) {
  const user = await userStore.fetchUserById(userId)
  userJoinedAt.value = new Date(user.joinedAt).toLocaleDateString('de-DE')
}

function getpastTime(date) {
  const today = new Date()
  const postDate = new Date(date)
  const diffTime = Math.abs(today - postDate)
  const diffhours = Math.ceil(diffTime / (1000 * 60 * 60))
  return diffhours
}

onMounted(() => {
  fetchUserName(props.post.userId)
  fetchUserJoinedAt(props.post.userId)
})
</script>

<template>
  <article class="my-4">
    <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl">
      <div class="flex items-start px-4 py-6 w-full">
        <div class="w-full">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">
              {{ username }}
            </h2>
            <small class="text-sm text-gray-700">{{ getpastTime(post.createdAt) }}h ago</small>
          </div>
          <p class="text-gray-700">Joined {{ userJoinedAt }}</p>
          <p class="mt-3 text-gray-700 text-sm">
            {{ post.post }}
          </p>
          <div class="mt-4 flex items-center">
            <LikeButton :post="post" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>

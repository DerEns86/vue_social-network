<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { usePostsStore } from '@/stores/posts'
import type { PostInterface } from '@/interfaces/post.interface'

const props = defineProps<{
  post: PostInterface
}>()

const postsStore = usePostsStore()

const liked = ref(props.post.isLiked)
const count = ref(props.post.likeCount)

console.log(liked.value, count.value)

const onHandleLike = async (postId: string) => {
  if (liked.value) {
    count.value--
    postsStore.unlikePost(postId)
  } else {
    count.value++
    postsStore.likePost(postId)
  }
  liked.value = !liked.value
}
</script>

<template>
  <div class="flex text-gray-700 text-sm mr-3">
    <svg
      @click="onHandleLike(post.id)"
      :fill="liked ? 'red' : 'none'"
      :class="liked ? 'text-red-500' : 'text-gray-500'"
      viewBox="0 0 24 24"
      class="w-4 h-4 mr-1"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
    <span>{{ count }}</span>
  </div>
</template>

<style scoped></style>

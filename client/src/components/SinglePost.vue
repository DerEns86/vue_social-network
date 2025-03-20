<script setup>
import LikeButton from '@/components/LikeButton.vue'

import { defineProps } from 'vue'
const props = defineProps(['post'])
</script>

<template>
  <section>
    <!-- component -->
    <!-- post card -->
    <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl">
      <!--horizantil margin is just for display-->
      <div class="flex items-start px-4 py-6">
        <div class="">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">Brad Adams</h2>
            <small class="text-sm text-gray-700">22h ago</small>
          </div>
          <p class="text-gray-700">Joined 12 SEP 2012.</p>
          <p class="mt-3 text-gray-700 text-sm">
            {{ post.post }}
          </p>
          <div class="mt-4 flex items-center">
            <LikeButton :post="post" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

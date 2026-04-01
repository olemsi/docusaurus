<script setup>
import DefaultTheme from 'vitepress/theme'
import AiChat from './components/AiChat.vue'
import HomePage from './components/HomePage.vue'
import { onMounted, computed } from 'vue'
import { useRouter, useData } from 'vitepress'

const { Layout } = DefaultTheme
const router = useRouter()
const { frontmatter } = useData()

const isHome = computed(() => frontmatter.value.customHome)

onMounted(() => {
  router.onBeforeRouteChange = (to) => {
    if (to.endsWith('.html') && to.includes('/api-reference/')) {
      window.location.href = to
      return false
    }
  }
})
</script>

<template>
  <div :class="{ 'is-home': isHome }">
    <Layout>
      <template #nav-bar-content-after>
        <AiChat />
      </template>

      <template v-if="isHome" #page-top>
        <HomePage />
      </template>
    </Layout>
  </div>
</template>

<style>
/* ── Home page overrides ── */
.is-home .VPNav {
  display: none !important;
}

.is-home .VPFooter {
  display: none !important;
}

.is-home .VPContent {
  padding-top: 0 !important;
}

.is-home .VPPage {
  padding: 0 !important;
}
</style>

<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-3">
        <img
          src="/Herlambang.jpg"
          alt="Portofolio"
          class="h-8 w-8 object-contain"
        />
        <NuxtLink class="text-xl font-bold" to="/">Portofolio</NuxtLink>
      </div>

      <div class="hidden items-center gap-4 md:inline-flex">
        <NuxtLink to="/" :class="linkClasses('/')"> Home </NuxtLink>
        <NuxtLink to="/about" :class="linkClasses('/about')"> About </NuxtLink>
        <NuxtLink to="/portofolio" :class="linkClasses('/portofolio')">
          Portofolio
        </NuxtLink>
        <NuxtLink to="/contact" :class="linkClasses('/contact')">
          Contact
        </NuxtLink>
        <div class="flex items-center gap-5">
          <button
            @click="toggleTheme"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
          >
            <Icon
              :name="mode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'"
              class="h-6 w-6"
            />
          </button>
        </div>
        <!-- <ButtonSession /> -->
      </div>
      <!-- Display Burger Menu on mobile screens (screen width <= 640px) -->
      <div class="flex items-center gap-5 md:hidden">
        <!-- Insert your Burger Menu component here -->
        <BurgerMenu />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
// import { useColorMode } from '@nuxt/content-theme'
// Import Icon and other dependencies as needed

const isScrolled = ref(false)
const route = useRoute()
const mode = useColorMode()
const isOpen = ref(false)

console.log(mode)

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

const toggleTheme = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navbarClasses = ref([
  'fixed inset-x-0 top-0 z-10 flex justify-between bg-white p-4 transition lg:px-12',
  isScrolled.value ? 'shadow-sm' : '',
])

const linkClasses = (targetPath: any) => {
  return route.path === targetPath
    ? 'rounded-lg px-3 py-2 text-sm font-semibold bg-zinc-100 text-zinc-900'
    : 'rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-300 hover:text-zinc-900'
}
</script>

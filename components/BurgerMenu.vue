<template>
  <HMenu as="div" class="relative">
    <HMenuButton
      class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
    >
      <img
        src="https://randomuser.me/api/portraits/med/men/75.jpg"
        alt="Logged in user"
        class="h-full w-full"
      />
    </HMenuButton>
    <TransitionScale :scale="0.8" origin="top right">
      <HMenuItems
        class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div class="border-b px-3 py-1.5 text-sm">
          <p class="font-semibold">Hello John</p>
          <a
            href="mailto:johndoe@test.com"
            class="leading-none text-muted-foreground"
            >johndoe@test.com</a
          >
        </div>
        <div class="p-1">
          <template v-for="(p, i) in profileMenuOptions" :key="i">
            <HMenuItem v-if="!p.divider" v-slot="{ active }">
              <button
                :class="[active && 'bg-muted']"
                class="inline-flex w-full items-center rounded-md p-2 text-sm font-medium"
              >
                {{ p.title }}
              </button>
            </HMenuItem>
            <hr v-if="p.divider" class="my-1" />
          </template>
        </div>
      </HMenuItems>
    </TransitionScale>
  </HMenu>
</template>

<script lang="ts" setup></script>

<style></style>

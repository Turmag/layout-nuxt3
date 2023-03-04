<script setup>
// You might choose this based on an API call or logged-in status
const layout = 'default';
const route = useRoute();
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator />
    <NuxtPage />
    <!-- here -->
    <template>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/" class="n-link-base"> Home </NuxtLink>
        <NuxtLink to="/tools" class="n-link-base"> Tools </NuxtLink>
        <button class="n-link-base" @click="$router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`)">
          Keyed child
        </button>
        <button class="n-link-base" @click="$router.push(`/parent/static-${(Math.random() * 100).toFixed()}`)">
          Non-keyed child
        </button>
      </nav>
    </template>
    <!--    header-->

    <template>
      <div class="text-center p-4 op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtLayout>
</template>

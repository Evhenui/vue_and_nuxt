<template>
  <div>
    <h1>Nuxt APP</h1>
    <p>This is the home page.</p>

    <button class="home-btn" @click="inc">Клікнуто: {{ count }}</button>

    <div>
      <p v-if="pending">Завантаження...</p>
      <pre v-else>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
const { count, inc } = useCounter()
const { data, pending } = await useFetch('/api/hello')

useHead({ title: 'Home Page' })
</script>

<template>
  <div>
    <h1>About Us</h1>
    <p>This is the about page.</p>
    <button class="home-btn" @click="inc">Клікнуто: {{ count }}</button>
  </div>
</template>

<script setup>
const { count, inc } = useCounter();

useHead({ title: 'About Page' });
</script>
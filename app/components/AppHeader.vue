<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">MyApp</NuxtLink>

    <nav>
      <NuxtLink to="/about" class="header__link">About</NuxtLink>
      <NuxtLink to="/contact" class="header__link">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;

    &__logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__link {
      margin-left: 1rem;
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
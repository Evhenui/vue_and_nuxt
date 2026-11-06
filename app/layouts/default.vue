<template>
  <div class="wrapper">
    <AppHeader />

    <main class="main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .main {
      flex: 1;
      padding: 2rem;
    }
  }
</style>
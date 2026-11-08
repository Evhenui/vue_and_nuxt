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
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    
    .main {
      flex: 1;

      padding: 16px;
    }
  }
</style>
<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} MyApp</p>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    @include flex(center, center, row, wrap);

    background-color: #efefef;
    
    padding: 10px 12px;
  }
</style>
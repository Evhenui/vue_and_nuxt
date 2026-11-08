<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="25 25 100 100"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366F1" />
            <stop offset="50%" stop-color="#8B5CF6" />
            <stop offset="100%" stop-color="#EC4899" />
          </linearGradient>

          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1E1B4B" />
            <stop offset="100%" stop-color="#0F172A" />
          </linearGradient>

          <filter
            id="drop-shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="6"
              flood-color="#6366F1"
              flood-opacity="0.35"
            />
          </filter>
        </defs>

        <rect
          x="25"
          y="25"
          width="100"
          height="100"
          rx="28"
          fill="url(#bg-grad)"
        />

        <rect
          x="25"
          y="25"
          width="100"
          height="100"
          rx="28"
          fill="none"
          stroke="#FFFFFF"
          stroke-opacity="0.1"
          stroke-width="2"
        />

        <g filter="url(#drop-shadow)">
          <path
            d="
              M 75 42
              L 101 57
              V 87
              L 75 102
              L 49 87
              V 57
              Z
            "
            fill="none"
            stroke="url(#logo-grad)"
            stroke-width="8"
            stroke-linejoin="round"
            stroke-linecap="round"
          />

          <path
            d="
              M 62 65
              L 75 57
              L 88 65
              V 80
              L 75 88
            "
            fill="none"
            stroke="url(#logo-grad)"
            stroke-width="6"
            stroke-linejoin="round"
            stroke-linecap="round"
          />

          <circle
            cx="62"
            cy="80"
            r="4"
            fill="#EC4899"
          />
        </g>
      </svg>
    </NuxtLink>

    <nav class="header__logo-nav">
      <NuxtLink to="/about" class="header__link">About</NuxtLink>
      <NuxtLink to="/contact" class="header__link">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .header {
    @include flex(space-between, center, row, wrap);

    background-color: #efefef;
    
    padding: 10px 12px;

    &__logo {
      max-width: 40px;

      @include flex;

      svg {
        @include flex;
      }
    }

    &__logo-nav {
      @include flex(space-between, center, row, wrap);

      gap: 10px;
    }

    &__link {
      transition: color .3s ease-in-out;

      &:hover {
        color: #6366F1;
      }
    }
  }
</style>
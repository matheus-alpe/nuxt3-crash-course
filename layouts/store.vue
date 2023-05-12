<template>
  <header>
    <nav>
      <NuxtLink to="/products">
        Nuxt Dojo Merch
      </NuxtLink>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <ul>
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/products">
          Products
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style>
a {
  text-decoration: none;
  color: #333;
}

.router-link-exact-active {
  color: #12b488;
}
</style>

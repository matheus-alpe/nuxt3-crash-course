<script lang="ts" setup>

</script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">
        Nuxt Dojo
      </NuxtLink>

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
    </nav>
  </header>

  <main>
    <slot />
  </main>
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

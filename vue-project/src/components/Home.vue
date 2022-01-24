<template>
<div>
  <p>Vue project</p>
  <router-link to="/lazy-load">
    <button>Lazy Load</button>
  </router-link>
  <router-link to="/bulk-data">
    <button>Bulk Data</button>
  </router-link>
  <router-link to="/request">
    <button>Request</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style></style>
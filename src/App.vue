<template>
  <v-app>
    <!-- Appbar -->
    <v-app-bar color="#151515" app dense>
      <v-toolbar-title
        style="color: #b4a5a5; cursor: pointer"
        @click="$router.push('/')"
      >
        Address Book
      </v-toolbar-title>
    </v-app-bar>

    <!-- Application -->
    <v-main fill-height style="background-color: #301b3f">
      <v-container py-md-16 py-5 px-4 px-md-auto>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("getContacts");
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c415c;
}
</style>

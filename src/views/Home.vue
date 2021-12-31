<template>
  <div class="home">
    <div class="contact-wrapper" v-for="(contact, index) in contacts" :key="index">
        <contact-item :contact='contact'/>
    </div>
  </div>
</template>

<script>
import ContactItem from "../components/ContactItem.vue";
export default ({
  name: "Home",
  components: {
    ContactItem
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },
});
</script>


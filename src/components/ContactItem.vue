<template>
  <div class="contact-item">
    <v-card class="contact-button my-4 pa-4" color="#B4A5A5" @click="goToDetailsPage()">
      <v-row no-gutters>
        <v-col class="d-flex justify-center align-center" cols="3">
          <v-avatar class="contact-image-avatar" v-if="picture.thumbnail">
            <img
              :src="picture.thumbnail"
            />
          </v-avatar>
        </v-col>
        <v-col class="d-flex justify-start align-center" cols="9">
          <v-card-title v-if="name.first || name.last" class="contact-name" style="color: #3c415c"
            >{{ name.first || '' }} {{ name.last || ''}}</v-card-title
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["contact"],
  data() {
    return {
      picture: {},
      name: {}
    }
  },
  created() {
    // Set up the data for picture and name
    if(this.contact.picture){
      if(this.contact.picture.thumbnail){
        this.picture = this.contact.picture
      }
    }

    if(this.contact.name){
      if(this.contact.name.first){
        this.name.first = this.contact.name.first
      }
      if(this.contact.name.last){
        this.name.last = this.contact.name.last
      }
    }

  },
  methods: {
    goToDetailsPage() {
      this.$store.commit("setSelectedContact", this.contact);
      this.$router.push("details");
    },
  },
};
</script>

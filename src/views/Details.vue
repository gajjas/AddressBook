<template>
  <div class="details">
    <v-card style="background-color: #b4a5a5; color: #3c415c" class="pa-4">
      <v-row>
        <!-- Image -->
        <v-col class="d-flex justify-center" cols="12">
          <v-img
            v-if="contact.picture"
            class="details-image"
            style="border-radius: 50%"
            max-height="200px"
            max-width="200px"
            :src="contact.picture.large"
          />
        </v-col>
        <v-col cols="12">
          <!-- First Name -->
          <v-col
            cols="12"
            class="d-flex justify-center ma-0 pa-0"
          >
            <v-card-title v-if="contact.name" class="text-h4 pa-0 details-name-first">{{
              contact.name.first || "N/A"
            }}</v-card-title>
            <v-card-title v-else class="text-h4 pa-0 details-name-first"
              >N/A</v-card-title
            >
          </v-col>
          <!-- Last Name -->
          <v-col
            cols="12"
            class="d-flex justify-center ma-0 pa-0"
          >
            <v-card-title v-if="contact.name" class="text-h4 pa-0 details-name-last">{{
              contact.name.last || "N/A"
            }}</v-card-title>
            <v-card-title v-else class="text-h4 pa-0 details-name-last"
              >N/A</v-card-title
            >
          </v-col>

          <!-- Age -->
          <v-card-title
            v-if="contact.dob"
            class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Age:</div><div class="details-age">{{ contact.dob.age || "N/A" }}</div></v-card-title
          >
          <v-card-title v-else class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Age:</div><div class="details-age">N/A</div></v-card-title
          >

          <!-- Gender -->
          <v-card-title class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Gender:</div><div class="details-gender">{{ contact.gender || "N/A" }}</div></v-card-title
          >

          <!-- Email -->
          <v-card-title class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Email:</div><div class="details-email">{{ contact.email || "N/A" }}</div></v-card-title
          >

          <!-- Phone -->
          <v-card-title class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Phone:</div><div class="details-phone">{{ contact.phone || "N/A" }}</div></v-card-title
          >

          <!-- Cell -->
          <v-card-title class="text-subtitle-1 py-0"
            ><div class="font-weight-medium mx-1">Cell:</div><div class="details-cell">{{ contact.cell || "N/A" }}</div></v-card-title
          >

          <!-- Address -->
          <v-card-title
            v-if="contact.location"
            class="text-subtitle-1 py-0 location-item"
            ><div class="font-weight-medium mx-1">Address:</div><div>
            {{ contact.location.street.number || "" }}
            {{ contact.location.street.name + "," || "" }}
            {{ contact.location.city + "," || "" }}
            {{ contact.location.state + "," || "" }}
            {{ contact.location.country || "" }}
            {{ contact.location.postcode || "" }}</div></v-card-title
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (this.$store.state.selectedContact == null) {
      this.$router.push("/");
    }
  },
  computed: {
    contact() {
      return this.$store.state.selectedContact;
    },
  },
};
</script>


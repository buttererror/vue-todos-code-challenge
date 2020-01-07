<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ todo }}
        </h3>
      </div>
    </v-card-title>
    <v-btn>
      Complete
    </v-btn>
    <v-btn color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
   import VueTypes from 'vue-types'

   export default {
   props: {
      todo: VueTypes.string.isRequired
   }
}
</script>

<style lang="css">
</style>

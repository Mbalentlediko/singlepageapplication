<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <img src="" alt="portfolio-picture" loading="lazy">
          
        </div>
        <div class="col">
        <div class="details">
            <h1 class="display-1">Mbalentle Diko</h1>
            <span> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted } from "vue"
const JobTitle = computed(()=> this.$store.state.JobTitle) 
onMounted(() =>{ this.dispatch('fetchJobTitle')
  
})

</script>

<style scoped>

</style>
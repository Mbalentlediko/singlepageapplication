<template>
    <div class="container">
      <div class="row">
          <div class="col">
              <div id="details">
                  <h1 class="display-1">Education</h1>
                  <p v-if="education">
                      <span>{{ education }}</span>
                  </p>
                  <Spinner v-else/>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //Displays job title within an array , just like an animatuon
  import Spinner from "./spinner.vue";
  import { computed, onMounted, ref } from "vue"
  import { useStore } from "vuex"
  const store = useStore()
  const education = 
  computed(() => store.state.education);
  // const title = ref("a software developer");
  const cnt = ref(-1);
  
  function repeat() {
    try {
      if (cnt.value == education.value?.length) cnt.value = 0;
      education.value = 
          education.value?.at(cnt.value)?.education;
          setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      //
    }
  }
  onMounted(() => {
    store.dispatch("fetchEducation");
    repeat();
  });
  </script>
  
  <style>
  
  </style>
<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <div id="details">
                <h1 class="display-1">About</h1>
                <p v-if="about">
                    <span>{{ about }}</span>
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
const about = 
computed(() => store.state.about);
// const title = ref("a software developer");
const cnt = ref(-1);

function repeat() {
  try {
    if (cnt.value == about.value?.length) cnt.value = 0;
    about.value = 
        about.value?.at(cnt.value)?.about;
        setTimeout(repeat, 2000);
    cnt.value++;
  } catch (e) {
    //
  }
}
onMounted(() => {
  store.dispatch("fetchAbout");
  repeat();
});
</script>

<style>

</style>
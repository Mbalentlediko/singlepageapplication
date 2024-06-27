<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
      <div class="col">
        <img
          src="https://mbalentlediko.github.io/Images/static/you.jpg"
          alt="portfolio"
          loading="lazy"
          class="img-fluid w-75 shadow rounded-top"
        />
      </div>
      <div class="col">
        <div class="details">
          <h1 class="display-1">Mbalentle Diko</h1>
          <p v-if="title">
            I am
            <span>{{ title }} </span>
          </p>
          <spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Displays job title within an array , just like an animatuon
import spinner from "./spinner.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const JobTitle = computed(() => this.$store.state.JobTitle);
const title = ref("a software developer");
const cnt = ref(-1);

function repeat() {
  try {
    if (cnt.value == JobTitle.value?.length) cnt.value = 0;
    title.value = JobTitle.value?.at(cnt.value)?.title;
    setTimeout(repeat, 2000);
    cnt.value++;
  } catch (e) {
    //
  }
}
onMounted(() => {
  store.dispatch("fetchJobTitle");
  repeat();
});
</script>

<style scoped></style>
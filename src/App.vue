<template>
 <div class="wrapper">
  <NavBar/>
  <main class="container-fluid">
     <router-view/> 
     </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    NavBar,
    Footer
  },
  computed:{
    jobTitle() {
     return this.$store.state.jobTitle
    }
  },
}
</script>
<style src="@/assets/css/style.css">
</style>

import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://mbalentlediko.github.io/eompTask/'
export default createStore({
  state: {
    jobTitle: null,
    aboutMe: null,
    education:null,
    experience: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAboutMw(state, value){
      state.aboutMe = value
    },
    setEducation(state, value){
      state.education= value
    },
    setExperience(state, value){
      state.experience = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    }
  },
  actions: {
    async fetchJobTitle(context) {
      try{
      let {jobTitle} =  await (await axios.get(portfolioURL)).data
      context.commit ("setJobTitle", jobTitle)
    }
    catch(e) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer:2000

      })
    }
  }
  },
  modules: {
  }
})








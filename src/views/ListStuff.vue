<template>
  <div class="home">
    <h1> список сотрудников банды</h1>
 


  <div v-for="cat in stuff" :key = "cat.id" >
    <JobCard 
        :id="cat.id"
        :nickname="cat.id" 
        :age="cat.age"
        :startDate="cat.dateStarJob" v-on:delete="deleteCat"
        />
  </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import JobCard from '@/components/JobCard.vue'
export default {
  name: 'ListStuff',
  components:{
    JobCard
  },
  computed:{
    stuff(){
      return this.$store.getters.getAddJob
    }
 
  },
  methods:{
    deleteCat(e){
      this.$store.commit('deleteCatName', e)
    }
  }
}
</script>

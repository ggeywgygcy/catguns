<template>
  <div class="rows">
  <h1>принятие на работу</h1>  
    <div>
      <div class="mb-3">
        <label for="CatName" class="form-label">кличка</label>
        <input v-model="stuff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="CatAge" class="form-label">скок лет</label>
        <input v-model="stuff.age" type="text" class="form-control" id="CatAge">
      </div>

      <div class="mb-3">
        <label for="CatAge" class="form-label">дата</label>
        <input v-model="stuff.dateStarJob" type="date" class="form-control" id="CatAge">
      </div>
  
  <button v-on:click="addjob" type="submit" class="btn btn-primary">подать заяву</button>
</div>
    
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'Addjod',
  props: {
    msg: String
  },
  data(){
    return{
      stuff : Cat
    }
  },
  methods:{
      addjob(){
        this.$store.commit('addWorker', this.stuff)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

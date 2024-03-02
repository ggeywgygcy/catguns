<template>
  <div class="home">
  <h1> список сотрудников банды</h1>

  <div>
    <div class="card" style="width: 18rem;">
      <!--<img src="..." class="card-img-top" alt="...">-->
      <div class="card-body">
      <h5 class="card-title">{{ nickname }}</h5>
      <p class="card-text">
        Fge {{ age }} <br/>
        dste {{ startDate }}
      </p>
      <button v-on:click="editCat" type="button" class="btn btn-secondary">Увше</button>
      <button v-on:click="deleteCat" type="button" class="btn btn-danger">Delete</button>

  </div>
</div>
  </div>  
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'JobCard',
  emits:['delete'],
  props: {
    nickname: '',
    age: '',
    startDate: ''
  },
  methods:{
    deleteCat(){
      //alert(`nickname ${this.nickname}`)
      this.$emit('delete', this.$props.nickname)
    },
    editCat(){
      this.$emit('edit', this.$props.nickname)
    }
  }
}
</script>

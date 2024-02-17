<template>
  <div class="rows">
  <h1>принятие на работу</h1>  
    <div>
      <div class="mb-3">
        <label for="CatName" class="form-label">кличка</label>
        <input type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="CatAge" class="form-label">скок лет</label>
        <input type="password" class="form-control" id="CatAge">
      </div>
  
  <button type="submit" class="btn btn-primary">подать заяву</button>
</div>
    
  </div>
</template>

<script>
export default {
  name: 'Addjod',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

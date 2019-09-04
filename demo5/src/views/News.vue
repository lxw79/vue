<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsArr: [`new01`, `new02`, `new03`, `new04`]
    }
  }
}
</script>

<style>

</style>

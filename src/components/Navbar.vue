<template>
  <nav class="navbar">
    <span class="version">alpha 0.7</span>
    <router-link
      tag="a"
      :to='url'
    >
      <h1>Monitoring tools</h1>
    </router-link>
  </nav>
</template>

<script>
// import moment from "moment";
export default {
  name: "Navbar",
  data() {
    return {
      url: '/',
      today: '',
    }
  },
  computed:{
    // calcGapDate(){
    //   // return (this.today.subtract(10,'days')   )
    // }
  }
}
</script>

<style scoped>
.navbar{
  background: linear-gradient(180deg, #790e8b 60%, rgba(224, 224, 224, .5) );
  height: 50px;
  text-align: center;

}
h1{
  margin: 0;
  line-height: 50px;
  color: #fff;
  text-transform: uppercase;
}
a{
  text-decoration: none;
}
.version{
  position: fixed;
  left: 0;
}
</style>
<template>
  <div>
    <USGSHeader :width='width'/>
    <nuxt/>
    <USGSFooter/>
  </div>
</template>

<script>
import USGSHeader from '~/components/Header.vue'
import USGSFooter from '~/components/Footer.vue'

export default {
  // register components
  components: {
    USGSHeader, USGSFooter
  },

  // declare state variables
  data(){
    return {
      width: ''
    }
  },

  // once mounted to page, set this.width equal to the screen window's innerWidth. This will update the value passed to the USGSHeader component.
  mounted(){
    this.width = window.innerWidth;
  }
}
</script>
<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>

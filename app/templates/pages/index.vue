<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        usgs-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>

      <%if(cms == 'Yes'){%>
      <!-- configure according to what is returned by async function, and how your CMS content is set up -->
      <div>
        <p v-for='d in data'>
          {{data.text}}
        </p>
      </div>
      <%}%>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  <%if(cms == 'Yes') {%>
  async asyncData ({env, params}) {
    let {data} = await axios.get(`${env.cockpit.apiUrl}/collections/get/${env.cockpit.contentType}?token=${env.cockpit.apiToken}`)

    // then get whatever bits out of the contentType that you want
    //e.g.:

    /*let paragraphs = await Promise.all(await data.map(async (p) => {
      let result = await axios.post('', {})  //add url to endpoint
    }))
    return { paragraphs }
    */

    return { data }
  },
  <%}%>
  components: {
    Logo
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>

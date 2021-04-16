<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
//import HelloWorld from './components/HelloWorld.vue'
import '@/css/styles.css';
export default {
  name: 'App',
  components: {
    Header, 
    Main,
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto min-content;
  grid-template-areas:
    "header"
    "main"
    "footer";

  grid-gap: 0.5em;
}

header,
main,
footer {
  border: solid #fff;
  color: #fff;
}


header,
footer {
  grid-column: 1 / -1;
}

</style>

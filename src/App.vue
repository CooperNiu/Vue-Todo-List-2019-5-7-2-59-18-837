<template>
  <div id="app">
    <Header/>
    <TodoList/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TodoList from './components/TodoList.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    TodoList,
    Footer
  }
}
</script>

<style>
@import "./assets/css/styles.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

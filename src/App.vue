<template>
  <div id="app">
   
    <Header />
    <Navbar @colorCount="restart($event)" />

    <div v-for="(color, i) in getColors" :key="i">
      <Square :color="getColors[i]" />
    </div>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from "./components/Navbar.vue"
import Square from "./components/Square.vue"

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Square
  },
  mounted(){
    this.restart(6)
  },
  data(){
    return {

    }
  },
  methods: {
    restart(count) {
      this.$store.dispatch("setMessage","")
      this.$store.dispatch("setButtonMessage","New Colors!")
      this.$store.state.colors = this.createNewColors(count)
      this.$store.dispatch("setPickedColor",this.$store.state.colors[this.pickColor(count)]);
    }, 

    pickColor(count) {
      var quantity;
      if (count == 6) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity );
    },

    createNewColors(numbers){
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
        return arr;
    },

    createRandomStringColor(){
      var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
      //console.log(newColor);
      return newColor;
    },

    randomInt(){
      return Math.floor(Math.random() * 256);
    },
    
  },
  computed: {
    getColors: function() {
      return this.$store.state.colors;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

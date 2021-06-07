<template>
  <div id="app">
   
    <Header :color="pickedColor"/>
    <Navbar :message="message" :buttonMessage="buttonMessage" @colorCount="restart($event)" />

    <div v-for="(color, i) in colors" :key="i">
      <Square :color="colors[i]" @onClick="clickSquare($event)"/>
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
    this.restart()
  },
  data(){
    return {
      colors: [],
      pickedColor:"",
      message:"",
      buttonMessage: "New Colors!",
      
    }
  },
  methods: {
    restart(count) {
      this.message = ""
      this.buttonMessage = "New Colors!"
      this.colors = this.createNewColors(count)
      this.pickedColor = this.colors[this.pickColor(count)];
    },

    clickSquare(color){
      if (color === this.pickedColor) {
        this.message = "You Picked Right"
        this.setAllColorsTo(color)
        this.buttonMessage = "Play Again!"
      }
      else{
        this.buttonMessage = "Try Again!"
      }

    },

    setAllColorsTo(color) {
      squares.forEach(function (square){
        square.style.backgroundColor = color;
      })
    },

    PickColor() {
      var quantity;
      if (isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity );
    },

    createNewColors(numbers){
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push(createRandomStringColor());
      }
        return arr;
    },

    createRandomStringColor(){
      var newColor = "rgb(" + randomInt() + ", " + randomInt() + ", " + randomInt() + ")" ;
      //console.log(newColor);
      return newColor;
    },

    randomInt(){
      return Math.floor(Math.random() * 256);
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

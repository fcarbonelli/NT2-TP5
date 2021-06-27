<template>
  <div id="container">
		<div class="square" :style="{backgroundColor: color}" @click="onClick()"></div>		
	</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ["color"],
  methods: {
    onClick() {
      this.$store.dispatch("clickSquare",this.color)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }
</style>

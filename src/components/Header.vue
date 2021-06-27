<template>
  <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">{{ this.$store.state.pickedColor }}</span>
			<br>
			Guessing Game</h1>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: ["color"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}
</style>

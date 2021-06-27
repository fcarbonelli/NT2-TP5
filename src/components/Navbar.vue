<template>
  <div id="navigator">
		<button id="reset" @click="setHard()"> {{ this.$store.state.buttonMessage }}</button>
		<span id="message"> {{ this.$store.state.message }}</span>

		<button id="easy" :class="{selected: !isHard}" @click="setEasy()">easy</button>
		<button id="hard" :class="{selected: isHard}" @click="setHard()">hard</button>
	</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ["message", "buttonMessage"],
  data(){
	return{ 
		isHard: true,
		colorCount: 6,
	}
  },
  methods:{
	setHard(){
		if (!this.isHard) {
			this.isHard = true;			
			this.colorCount = 6;	
			this.sendDiff(this.colorCount)		
		}
	},
	setEasy(){
		if (this.isHard) {
			this.isHard = false;			
			this.colorCount = 3;			
			this.sendDiff(this.colorCount)
		}
	},
	sendDiff(count){
		this.$emit("colorCount",count)
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}
#message {
	color: #ffffff;
	display: inline-block;
	width: 20%;
}
.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
</style>

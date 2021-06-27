  
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        colors: [],
        pickedColor:"",
        message:"",
        buttonMessage: "New Colors!",
    },
    actions: {
        setAllColorsTo({commit}, color){
            commit("setAllColorsTo", color)
        },
        clickSquare({commit},color){
            if (color === this.state.pickedColor) {               
                commit("setMessage", "You Picked Right")
                commit("setButtonMessage", "Play Again!")
                commit("setAllColorsTo", color)
            }
            else{
                commit("setButtonMessage", "Try Again!")
            }
        },
        setMessage({commit}, message){
            commit("setMessage",message)
        },
        setButtonMessage({commit}, message){
            commit("setButtonMessage",message)
        },
        setPickedColor({commit}, color) {
            commit('setPickedColor', color);
        },
    },
    mutations:{
        setAllColorsTo(state, color) {
            for (let i = 0; i < state.colors.length; i++) {
                state.colors[i] = color;
            }
        },
        setMessage(state, message){
            state.message = message
        },
        setButtonMessage(state, message){
            state.buttonMessage = message
        },
        setPickedColor(state, color) {
            state.pickedColor = color;
          },
    }
})
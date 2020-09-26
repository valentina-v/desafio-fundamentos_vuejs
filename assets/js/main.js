const app = new Vue ({
el:'#app',

data: {
    title: 'Intro a VueJs',
    cart:[],
    showStyle:{
        display:'block'
    },
    displayCart: false,
    premiumUser: false
},
methods: {

},

computed: {
    modalStyle () {
        if(this.displayCart){
            return this.showStyle;
        } else {
            return {};
        }
    }

}

});
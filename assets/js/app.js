
let app = new Vue({
    el: '#app',
    data: { 
        
        
        shopCart: false,
        appName: 'Voedselbos',
        

        

    },

    computed: {
        
    },

    methods: {
        toggleCart() {
            this.shopCart = !this.shopCart
        },
        
       
    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
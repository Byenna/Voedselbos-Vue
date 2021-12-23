
let app = new Vue({
    el: '#app',
    data: {
        carts: [],
        shopCart: false,
        appName: 'Voedselbos',
        fruitList: "fruits",
        cart: [],
       

    },

    computed: {

    },

    methods: {
        toggleCart() {
            this.shopCart = !this.shopCart
        },
        updateCart(id) {
            this.carts.push(id)
            this.cart.push(id)
            
        },
       
        
      


    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
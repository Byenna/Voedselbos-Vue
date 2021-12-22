
let app = new Vue({
    el: '#app',
    data: {
        cart: [],
        shopCart: false,
        appName: 'Voedselbos',
        fruitList: "fruits"
       

    },

    computed: {

    },

    methods: {
        toggleCart() {
            this.shopCart = !this.shopCart
        },
        updateCart(id) {
            this.cart.push(id)
            
        }
      


    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
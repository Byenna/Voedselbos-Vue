
let app = new Vue({
    el: '#app',
    data: {
        carts: [],
        shopCart: false,
        appName: 'Voedselbos',
        fruitList: "fruits",
        cart: [],
        prices: [],
        prijs: 0,



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
        updateTotal(id) {
            this.prices.push(id)
        },
        removeItemFromCart(cart) {
            {
                this.carts.splice(this.cart.indexOf(cart))
                this.cart.splice(this.cart.indexOf(cart))
                this.prices.splice(this.cart.indexOf(cart))
                }
        }
        
    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
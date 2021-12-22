
let app = new Vue({
    el: '#app',
    data: { 
        fruitList: fruits,
        cart: 0,
        selectedVariants: [],
        shopCart: false,
        appName: 'Voedselbos',
        

        

    },

    computed: {
        name() {
            return this.fruits[this.selectedVariants].name
        },
        price() {
            return this.fruits[this.selectedVariants].price
        }
    },

    methods: {
        toggleCart() {
            this.shopCart = !this.shopCart
        },
        updateCart(index) {
            this.cart += 1
            this.selectedVariants = index

        },
        removeItemFromCart(fruit) {
            this.cart.splice(this.cart.indexOf(fruit))
            }
       
    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
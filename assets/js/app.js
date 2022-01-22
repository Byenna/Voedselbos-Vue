
let app = new Vue({
    el: '#app',
    data: {
        carts: [],
        shopCart: true,
        fruitList: "fruits",
        cart: [],
        prices: [],
        prijs: 0,
        viewCart: false,
       



    },

        computed: {
            totalPrice() {
                return (this.prices.reduce(function sumOf(acc, curr) {
                    acc = acc + curr
                    return acc
                }, 0) );
            }
        },
    


    methods: {
       
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
        },
        closeCart() {
            if (this.viewCart) {
                this.viewCart = !this.viewCart
            }
        },

        showCart() {
                this.viewCart = !this.viewCart
            
        }



    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
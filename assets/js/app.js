
let app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        shopCart: false,
        appName: 'Voedselbos',
       

    },

    computed: {

    },

    methods: {
        toggleCart() {
            this.shopCart = !this.shopCart
        },
        updateCart(index) {
            this.cart += 1
            console.log(index);
        }
      


    }



})

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.component("shopping-cart-items", {
    data: function () {
        return {
            fruitList: fruits,
            cart: 0,
            selectedVariants: [],
        }
    },
    props: {},



    methods: {
        updateCart(index) {
            this.cart += 1
            this.selectedVariants = index

        },
        removeItemFromCart(fruit) {
            this.cart.splice(this.cart.indexOf(fruit))
        }
    },

    computed: {
        name() {
            return this.fruits[this.selectedVariants].name
        },
        price() {
            return this.fruits[this.selectedVariants].price
        }
    },

    template: `
    <div>
        <div v-for="selectedVariant in selectedVariants"
            class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="#" class="img-fluid rounded-circle" id="item-img" alt="">

            <div class="item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">{{ name }}</p>
                <span>€</span>
                <span id="cart-item-price" class="cart-item-price mb-0">{{ price}}</span>
             </div>

            <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i @click="removeItemFromCart(fruit[0])" class="fas fa-trash"></i>
            </a>
        </div>
        <P>Aantal producten in mandje: {{ cart }}</P>
    </div>`,




})
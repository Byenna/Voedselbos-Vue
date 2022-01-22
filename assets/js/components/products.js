Vue.component("products", {
    data: function () {
        return {
            fruitList: fruits,
            selectedVariant: 0,
            show: false,
            
            
        }
    },
    props: {

    },



    methods: {
        addToCart(index) { 
            this.selectedVariant = index
            this.$emit('add-to-cart', this.fruitList[this.selectedVariant])
            this.$emit('add-to-total', this.fruitList[this.selectedVariant].price)
        },
        
       
       
    },
    computed: {},

    template: `
<div  class="row">
    <div  v-for="(fruit, index) in fruitList" class="col-sm">
        <div class="card" style="width: 18rem;">
            <img :src="fruit.image" class="card-img-top" alt="kersen">
                <div class="card-body">
                    <h5 class="card-title">{{ fruit.name }}</h5>
                    <p @click='fruit.show = !fruit.show' >Meer info</p>

                    <p v-show='fruit.show' class="card-text">{{ fruit.description }}</p>

                    <h5 class="store-item-value">€ 
                    <strong id="store-item-price" class="font-weight-bold">{{ fruit.price }}</strong>
                    </h5>

                    <span @click="addToCart(index)" class="buttonItem"><i
                        class="btn btn-primary">Bestel</i>
                    </span>
                </div>
        </div>
    </div>
</div>`,




})


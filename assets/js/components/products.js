Vue.component("products", {
    data: function () {
        return {
            fruitList: fruits,
            
            
        }
    },
    props: {

    },



    methods: {
        addToCart(index) {
            console.log("hallo");
            this.$emit('add-to-cart', index)
            

        },
    },

    template: `
<div  class="row">
    <div  v-for="(fruit, index) in fruitList" class="col-sm">
        <div class="card" style="width: 18rem;">
            <img :src="fruit.image" class="card-img-top" alt="kersen">
                <div class="card-body">
                    <h5 class="card-title">{{ fruit.name }}</h5>

                    <p class="card-text">{{ fruit.description }}</p>

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


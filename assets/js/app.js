Vue.component("products", {
    template: `
    <div class="card" style="width: 18rem;">
    <img :src="fruit_data.image" class="card-img-top" alt="kersen">
    <div class="card-body">
      <h5 class="card-title">{{ fruit_data.name }}</h5>

      <p class="card-text">{{ fruit_data.description }}</p>
      <h5 class="store-item-value">€ <strong id="store-item-price" class="font-weight-bold">4</strong>
      </h5>

      <span class="buttonItem"><i  class="btn btn-primary">Bestel</i></span>



    </div>
  </div>
    `,
    data() {
        return {
         
         
        }
    },

    props: {
        fruit_data: {}
   
    }
   
       
   

})


let app = new Vue({
    el: '#app',

    data: {
        appName: 'Voedselbos',
        fruits: [
            {
                id: 1,
                name: "Zoete kersen",
                description: "Kom zoveel kersen plukken als u wil voor een vaste prijs! De kersen zijn erg zoet dit jaar.",
                image: "/assets/images/kersen.jpg",
                price: 7,
                quantity: 50,
            },
            {
                id: 2,
                name: "Sappige pruimen",
                description: "Met deze pruimen maak je de lekkerste taart. De ladder staat al klaar. Waar wacht u nog op?",
                image: "/assets/images/pruimen.jpg",
                price: 4,
                quantity: 20,
            },
            {
                id: 3,
                name: "Paprika",
                description: "De paprika oogst is dit jaar wat magertjes. Graag niet meer dan 2 per klant.",
                image: "/assets/images/paprika.jpg",
                price: 2,
                quantity: 10,
            },
            {
                id: 4,
                name: "Cherry tomaatjes",
                description: "Deze cherrytomaatjes mogen niet ontbreken in uw salade. Zongerijpt en biologisch.",
                image: "/assets/images/salade.jpg",
                price: 5,
                quantity: 70,
            },
            {
                id: 5,
                name: "Groentenpakket",
                description: "Speciaal voor gasten die slecht ter been zijn maken wij ook een groentenpakket.",
                image: "/assets/images/artisjok.jpg",
                price: 8,
                quantity: 50,
            },
            {
                id: 6,
                name: "Zure appels",
                description: "Deze Granny's zijn lichtzuur van smaak en klaar om geplukt te worden.",
                image: "/assets/images/appels.jpg",
                price: 10,
                quantity: 0,
            }
        ],
        
},
data() {
    return {
        
    }
},
methods: {
    showCart() {
        this.showCart = !this.showCart
    }
}
   
    

})

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.component('nav-bar', {

    data() {
        return {
            appName: 'Voedselbos',
            
        }
    },

    methods: {
        toggleCart() {
            this.$emit('toggle-cart');
        },
    },

    template: `

<nav class="container">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-transparant fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand fs-2 text-white" href="/index.html">{{ appName }}</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
               
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <a class="nav-link active text-white fs-2" aria-current="page"
                        href="#allItems">Producten</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white fs-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Informatie </a>
                        
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">                 
                            <li><a class="dropdown-item" href="#">Onze werkwijze</a></li>                    
                            <li><a class="dropdown-item" href="#">Vrijwilliger worden?</a></li>
                        </ul>

                    </li>
                </ul>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Wat zoekt u?" aria-label="Search">

                    <button class="bi bi-search btn btn-light"></button>

                    <span id="basket">
                    <i @click="toggleCart" class="btn btn-light bi bi-basket"></i>
                    </span>
                </form>
            </div>
        </div>
    </nav>
</nav>
	
`
});
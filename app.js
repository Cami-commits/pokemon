const vm = new Vue({
    el: "#app",
    data: {
        pokemons: [],
    },
    methods: {
        async fetchChar() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
            const response_1 = await response.json();
            this.pokemons = response_1;
            for (let i = 0; i < this.pokemons.results.length; i++) {
                fetch(this.pokemons.results[i].url)
                    .then(response_2 => response_2.json())
                    .then(response_3 => {
                        this.pokemons.results[i].info = response_3;
                        console.log(response_3)
                    });
            }

        },


    },

    created() {
        this.fetchChar();
    }
})
// async function loadImage(pokemon) {
//     let response = await fetch(pokemon.url);
//     let data = await response.json();
//     debugger;
//     return data.sprites.front_default;
// }
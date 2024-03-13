const app = Vue.createApp({
    /////////////////options API
    /*template: `
    <h1>Hola Mundo</h1>
    <h2>Desde App</h2>
    `*/
    //methods: {},
    //whatch:{},
    ///////////////end options API
    ///////////////composition API///////
    //setup(){}
    //////////////end compotition

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods:{
        changeQuote( /*event*/ ){
            console.log('Hola mundo',/*event*/)
            // author = 'Fernando Herrera'
            this.author = 'Fernando Herrera'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp');
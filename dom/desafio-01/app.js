new Vue ({
    el: '#desafio',
    data: {
        nome: 'elber',
        idade: '28',
        linkImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    methods: {
        multiplicaIdade: function(idade, multiplicador){
            return idade * multiplicador;
        },
        randomico: function(){
           var randomizado = 0;
           randomizado = Math.random();

           return randomizado;
        }
    }
});
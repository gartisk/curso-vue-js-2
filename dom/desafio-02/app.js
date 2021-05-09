new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        clicouAqui: function(){
            alert("Você clicou aqui!");
        },
        armazenarValor: function(event){
            this.valor = event.target.value;
        }
    }
})
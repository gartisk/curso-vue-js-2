new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        contando: false
    },
    watch: {
        resultado() {
            if( this.contando ){
                return;
            }
            
            this.contando = true;
            setTimeout(() =>{
                this.contando = false;
                this.valor = 0;
            }, 5000);
        }
    },
    computed: {
        resultado() {
            return this.valor === 37 ? "Valor Igual a 37" : "Valor Diferente de 37";
        }
    }
});
new Vue({
	el: '#desafio',
	data: {
		efeito: '',
		esperandoEfeito: false,
		classeInputada: '',
		classeInputada2: '',
		fazerNovoInputDeClasse: false,
		estiloDeclarado: '',
		progresso: 0,
		esperandoProgresso: 0
	},
	methods: {
		iniciarEfeito() {
			this.efeito = 'destaque';
		},
		iniciarProgresso() {
			if( this.progresso > 0){
				return;
			}

			setInterval( () => {
				this.progresso = this.progresso < 100 ? this.progresso + 2 : 1;
			}, 50);
		}
	},
	watch: {
		efeito() {
			if( this.esperandoEfeito ){
				return;
			}
			this.esperandoEfeito = true;

			setInterval( () => {
				this.efeito = this.efeito === 'encolher' ? 'destaque' : 'encolher';
			}, 3000);
		}
	}
})

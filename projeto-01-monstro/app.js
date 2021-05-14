// window.onload = function () {
    new Vue({
        el: '#app',
        data: {
            running: false,
            playerLife: 100,
            monsterLife: 100,
            logs: []
        },
        computed: {
            hasResult() {
                return this.playerLife == 0 || this.monsterLife == 0;
            }
        },
        methods: {
            startGame() {
                this.running = true;
                this.playerLife = 100;
                this.monsterLife = 100;
            },
            attack(isSpecial) {
                this.hurt('monsterLife', 5, 10, isSpecial, 'Jogador', 'Monstro', 'player');
                if( this.monsterLife < 1){ return; }
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
            },
            hurt(target, min, max, isSpecial, from, to, cls) {
                const plus = isSpecial ? 5 : 0;
                const hurt = this.getRandom(min + plus, max + plus);
                this[target] = Math.max(this[target] - hurt, 0);
                this.registerLog(`${from} atingiu o ${to} com ${hurt}.`, cls);
            },
            healAndHurt(min, max) {
                this.heal(10, 15);
                this.hurt('playerLife', 7, 12, false);
            },
            heal (min, max) {
                const heal = this.getRandom(min, max);
                this.playerLife = Math.min(this.playerLife + heal, 100);
            },
            getRandom(min, max) {
                const value = Math.random() * (max - min) + min;
                return Math.round(value);
            },
            registerLog(text, cls) {
                this.logs.unshift({ text, cls});
            }

        },
        watch: {
            hasResult(value){
                if(value) this.running = false;
            }
        }
    });
// };
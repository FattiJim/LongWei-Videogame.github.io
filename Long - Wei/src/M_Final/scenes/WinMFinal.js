class WinMFinal extends Phaser.Scene{
    constructor(){
        super({
            key: 'WinMFinal'
        });
    }

    init() {
        console.log('Escena Win Mision Final');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'final');
    }

    update(time, delta) {
    }
}

export default WinMFinal;
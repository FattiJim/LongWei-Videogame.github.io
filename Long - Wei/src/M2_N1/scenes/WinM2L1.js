class WinM2L1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'WinM2L1'
        });
    }

    init() {
        console.log('Escena Win Mision 2 - Nivel 1');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'win_M2-L1');

        //Icono play
        this.next = this.add.image(1200, 650, 'next').setInteractive();
        this.next.setScale(0.6);

        //Icono para regresar
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('LevelOne'); 
        }, this);

        this.next.on('pointerdown', function () {
            this.scene.bringToTop('Principal');
        }, this);
    }

    update(time, delta) {
    }
}

export default WinM2L1;
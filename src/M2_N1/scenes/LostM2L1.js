class LostM2L1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'LostM2L1'
        });
    }

    init() {
        console.log('Escena Lost Mision 2 - Nivel 1');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'lost_M2-L1');

        //Icono play
        this.restart = this.add.image(1200, 650, 'restart').setInteractive();
        this.restart.setScale(0.6);

        //Icono para regresar
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('LevelOne'); 
        }, this);

        this.restart.on('pointerdown', function () {
            this.scene.start('Mision2_N1');
        }, this);
    }

    update(time, delta) {
    }
}

export default LostM2L1;
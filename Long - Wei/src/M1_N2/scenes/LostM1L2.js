class LostM1L2 extends Phaser.Scene{
    constructor(){
        super({
            key: 'LostM1L2'
        });
    }

    init() {
        console.log('Escena Lost Mision 1 - Nivel 2');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'lost_M1-L2');

        //Icono play
        this.restart = this.add.image(1200, 650, 'restart').setInteractive();
        this.restart.setScale(0.6);

        //Icono para regresar
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('LevelTwo'); 
        }, this);

        this.restart.on('pointerdown', function () {
            this.scene.start('Mision2_N2');
        }, this);
    }

    update(time, delta) {
    }
}

export default LostM1L2;
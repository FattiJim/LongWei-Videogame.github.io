class InicioM1_N1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'InicioM1_N1'
        });
    }

    init() {
        console.log('Escena Inicio de Mision 1 - Nivel 1');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'M1-L1');

        //Icono play
        this.play = this.add.image(1200, 650, 'play').setInteractive();
        this.play.setScale(0.6);

        //Icono para regresar
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('LevelOne'); 
        }, this);

        this.play.on('pointerdown', function () {
            this.scene.start('Mision1_N1');
        }, this);
    }

    update(time, delta) {
    }
}

export default InicioM1_N1;
import UI from "./UI.js"
class LevelThree extends Phaser.Scene {
    constructor() {
        super({
            key: 'LevelThree'
        });
    }

    init() {
        console.log('Escena Nivel Tres');
    }

    preload() {
       
    }

    create() {
        this.background = this.add.image(640, 360, 'background').setPipeline('Light2D');
        this.scene.launch('UI_Principal');

        this.lights.enable(); //se habilitan las luces
        this.lights.setAmbientColor(0x808080); //luz por defecto
    
        var spotlight = this.lights.addLight(200, 300, 280).setIntensity(2);
        this.input.on('pointermove', function (pointer) {

            spotlight.x = pointer.x;
            spotlight.y = pointer.y;
    
        });

        //Agregamos las cartas que corresponden al nivel
        this.mision1 = this.add.image(420, 360, 'm2_n3').setInteractive();
        this.mision1.setScale(1.55);
        this.mision2 = this.add.image(850, 360, 'card_3');
        this.mision2.setScale(1.55);

        //Agregamos la activación de las carta
        this.mision1.on('pointerdown', function (){
            this.mision1.setScale(1.1);
            this.scene.start('Inicio_Final');
        }, this);

        //Boton de regreso
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('Principal'); 
            this.scene.bringToTop('UI');
        }, this);

    }

    update(time, delta) {

    }
}

export default LevelThree;
import UI from "./UI.js"
class Personaje extends Phaser.Scene {
    constructor() {
        super({
            key: 'Personaje'
        });
    }
    init() {
        console.log('Escena Personaje');
    }

    preload() {
         //Pre-carga de assets
         this.load.path = './assets/';
         this.load.image('bg_character', 'personaje.png');
    }
    create() {
        //Fondo con características
        this.bg = this.add.image(640, 360, 'bg_character');
        
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
export default Personaje;
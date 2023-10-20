import UI from "./UI.js"
var bg_n1;
var bg_start;
class Principal extends Phaser.Scene {
    constructor() {
        super({
            key: 'Principal'
        });
    }

    init() {
        console.log('Escena Principal');
    }

    preload(){
        
    }

    create() {
        //Iniciando escenas para posterior llamada
        this.scene.launch('LevelOne');
        this.scene.launch('LevelTwo');
        this.scene.launch('LevelThree');
        this.scene.launch('Personaje');
        this.scene.launch('Logros');
        this.scene.sendToBack('LevelOne');
        this.scene.sendToBack('LevelTwo');
        this.scene.sendToBack('LevelThree');
        this.scene.sendToBack('Personaje');
        this.scene.sendToBack('Logros');
        
        //Fondos de los niveles
        bg_n1 = this.add.tileSprite(640, 360, 2560, 1440, 'bg_n1');
        bg_start = this.add.tileSprite(640, 360, 2560, 1440, 'bg_start');

        //Mapa por partes
        this.nivel1 = this.add.image(220, 490, '1').setScale(0.85);
        this.nivel2 = this.add.image(500, 220, '2').setScale(0.85);
        this.nivel3 = this.add.image(810, 490, '3').setScale(0.85);
        this.nivel4 = this.add.image(1100, 220, '4').setScale(0.85);

        //Manejo de camaras 
        setTimeout(() => {
            this.cameras.main.pan(this.nivel1.x, this.nivel1.y, 3000, 'Sine.easeInOut');
        }, 2000);

        this.cameras.main.on(Phaser.Cameras.Scene2D.Events.PAN_COMPLETE, () => {
            this.cameras.main.zoomTo(2, 1000, 'Sine.easeInOut'); 
            setTimeout(() => {
                this.cameras.main.zoomTo(1, 1000, 'Sine.easeInOut'); 
            }, 3700);
        });

        setTimeout(() => {
            this.cameras.main.pan(640, 360, 3000, 'Sine.easeInOut');
        }, 10000);
        
        //Nombre de los niveles
        this.etiquetaN1 = this.add.image(250, 490, 'level1').setScale(2);
        this.etiquetaN2 = this.add.image(530, 220, 'level2').setScale(2);
        this.etiquetaN3 = this.add.image(840, 490, 'level3').setScale(2);
        this.etiquetaN4 = this.add.image(1130, 220, 'level4').setScale(2);

        this.play_N1 = this.add.image(220, 600, 'play').setScale(0.5).setInteractive();
        this.play_N2 = this.add.image(500, 350, 'play').setScale(0.5).setInteractive();
        this.play_N3 = this.add.image(810, 600, 'play').setScale(0.5).setInteractive();
        this.play_N4 = this.add.image(1100, 360, 'play').setScale(0.5).setTint(0x808080);


        this.play_N1.on('pointerdown', function () {
            this.scene.bringToTop('LevelOne');
            this.scene.bringToTop('UI');
        }, this);

        this.play_N2.on('pointerdown', function () {
            this.scene.bringToTop('LevelTwo');
            this.scene.bringToTop('UI');
        }, this);

        this.play_N3.on('pointerdown', function () {
            this.scene.bringToTop('LevelThree');
            this.scene.bringToTop('UI');
        }, this);


    }

    update(time, delta) {
        bg_n1._tilePosition.x += 0.3;
        bg_start._tilePosition.x += 0.3;
    }
}
export default Principal;
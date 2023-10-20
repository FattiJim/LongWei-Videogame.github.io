import UI from "./UI.js"
class Logros extends Phaser.Scene {

    constructor() {
        super({
            key: 'Logros'
        });
    }

    init() {
        console.log('Escena Logros');
    }

    preload() {
        this.load.path = './assets/';
        //this.load.image('bg_game', 'nivel_1.png');
        this.load.image('marco', 'objetivos_/marco.png');
        this.load.image('fondoMarco', 'objetivos_/fondoMarco.png');
        this.load.image('obj', 'objetivos_/objetivos.png');
    }

    create() {
        //Fondo de prueba
        this.bg = this.add.image(1280, 720, 'nivel_1');

        this.margen = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'marco');
        this.fondo = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'fondoMarco');
        this.fondo.setDepth(0);
        this.margen.setDepth(1);
        var content = this.add.image(650,160, 'obj',{ wordWrap: { width: 310 } });
        

        var graphics = this.make.graphics();

        // graphics.fillStyle(0xffffff);
        //x,y,ancho,alto
        graphics.fillRect(290, 150, 800, 400);

        var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

        //var text = this.add.image(160, 280, content);

        content.setMask(mask);

        //  The rectangle they can 'drag' within
        var zone = this.add.zone(300, 150, 800, 400).setOrigin(0).setInteractive();

        zone.on('pointermove', function (pointer) {

            if (pointer.isDown) {
                content.y += (pointer.velocity.y / 10);

                content.y = Phaser.Math.Clamp(content.y, -400, 300);
            }

        });

        var help = this.add.text(150, 50, 'Scroll con el mouse para ver los logros', {
            fontFamily: 'Consolas',
            fontSize: '18px',
            padding: { x: 10, y: 10 },
            backgroundColor: '#80A76E',
            fill: '#000000'
        });

        help.setScrollFactor(0);

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
export default Logros;
class WinM1L2 extends Phaser.Scene{
    constructor(){
        super({
            key: 'WinM1L2'
        });
    }

    init() {
        console.log('Escena Win Mision 1 - Nivel 2');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'win_M1-L2');

        //Icono play
        this.next = this.add.image(1200, 650, 'next').setInteractive();
        this.next.setScale(0.6);

        //Icono para regresar
        this.back = this.add.image(80, 650, 'back').setScale(0.6);
        this.back.setInteractive();

        this.back.on('pointerdown', function () {
            this.scene.bringToTop('LevelTwo'); 
        }, this);

        this.next.on('pointerdown', function () {
            this.scene.start('LevelTwo');
        }, this);
    }

    update(time, delta) {
    }
}

export default WinM1L2;
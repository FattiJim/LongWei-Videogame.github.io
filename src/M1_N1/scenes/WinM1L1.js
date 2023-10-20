class WinM1L1 extends Phaser.Scene{
    constructor(){
        super({
            key: 'WinM1L1'
        });
    }

    init() {
        console.log('Escena Win Mision 1 - Nivel 1');
        console.log('Estamos en la escena win');
    }
    
    

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'win_M1-L1');

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
            this.scene.start('LevelOne');
            this.registry.events.emit('active_mission', 2);
        }, this);
    }

    update(time, delta) {
    }
}

export default WinM1L1;
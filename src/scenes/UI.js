var actual_life = 100;
var actual_score;
class UI extends Phaser.Scene {
    constructor() {
        super({
            key: 'UI'
        });
    }
    init() {
        console.log('Escena UI');
        
    }

    preload() {
        // this.registry.events.on('vida', (life) => {
        //     this.actual_life = life;
        // });

        // this.registry.events.on('fruits', (totalFruits) => {
        //     this.actual_score = totalFruits;
        // });
    }

    create() {
        //Iconos de menú
        this.soundtrack = this.sound.add("soundtrack");
        this.soundtrack.volume -= 0.4;
        var music_config = {
            loop: true
        }
        this.soundtrack.play(music_config);

        //Musica botones
        this.botones = this.sound.add("m_botones");

        //Iconos de sonido
        this.musica = this.add.image(1200, 70, 'sound').setInteractive();
        this.musica.setScale(0.6);
        this.musica_off = this.add.image(1200, 70, 'sound_off').setInteractive();
        this.musica_off.setScale(0.6);
        this.musica_off.setVisible(0);

        this.musica.setScrollFactor(0);
        this.musica_off.setScrollFactor(0);

        //Icono menú
        this.menu = this.add.image(80, 70, 'info').setScale(0.6);
        this.menu.setScrollFactor(0);

        this.logros = this.add.image(170, 70, 'piezas').setScale(0.6);
        this.logros.setInteractive();
        this.logros.setScrollFactor(0);

        // //Puntuación
        // this.foodText = this.add.text(1100, 70, actual_score, { fontSize: '30px', fill: '#fff' });
        // this.foodText.setScrollFactor(0);
        // this.foodIcon = this.add.image(1040, 70, 'fruits_icon').setScale(1.5);
        // this.foodIcon.setScrollFactor(0);

        // this.lifeText = this.add.text(950, 70, actual_life, { fontSize: '30px', fill: '#fff' });
        // this.lifeText.setScrollFactor(0);
        // this.lifeIcon = this.add.image(890, 70, 'dragonFire').setScale(1.5);

        //Eventos de los botones funcionales
        this.logros.on('pointerdown', function () {
            this.botones.play();
            this.scene.bringToTop('Logros');
            this.scene.bringToTop('UI');
        }, this);

        this.menu.on('pointerdown', function () {
            this.botones.play();
            this.scene.bringToTop('Personaje');
            this.scene.bringToTop('UI');
        }, this);

        this.musica.on('pointerdown', function () {
            this.botones.play();
            this.musica.setVisible(0);
            this.musica_off.setVisible(1);
            this.soundtrack.pause();
        }, this);

        this.musica_off.on('pointerdown', function () {
            this.botones.play();
            this.musica.setVisible(1);
            this.musica_off.setVisible(0);
            this.soundtrack.play();
        }, this);


    }

    update(time, delta) {
    }
}
export default UI;
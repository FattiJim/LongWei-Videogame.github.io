class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }

    preload() {
        //Pre-carga de assets
        this.load.path = './assets/';

        //Carga de fondos
        this.load.image('background', 'fondo.jpeg');
        this.load.image('bg_negro', 'fondo-negro.jpeg');
        this.load.image('logo', 'logo.png');
        this.load.image('bg_n1', 'backgrounds/nivel_1.png')
            .image('bg_start', 'backgrounds/Stars Small_1.png');

        //Carga de iconos para las vidas y frutas
        this.load.image(['dragonFire']);
        this.load.image('fruits_icon', 'fruits.png');

        //Carga de niveles
        this.load.image(['1', '2', '3', '4', 'piezas']);
        this.load.image(['level1', 'level2', 'level3', 'level4']);

        //Carga de misiones
        this.load.image('bg_levels', 'missions/backgroundLevels.jpg')
            .image('m1_n1', 'missions/ms1-L1.png')
            .image('m2_n1', 'missions/ms2-L1.png')
            .image('m1_n2', 'missions/ms1-L2.png')
            .image('m2_n2', 'missions/ms2-L2.png')
            .image('m1_n3', 'missions/ms1-L3.png')
            .image('card_3', 'missions/card_3.png')
            .image('m2_n3', 'missions/ms2-L3.png');

        //Carga de descripción de misiones
        this.load.image('final', 'caption/final.png')
            .image('lost_M1-L2', 'caption/lost_M1-L2.png')
            .image('lost_M2-L1', 'caption/lost_M2-L1.png')
            .image('lost_M2-L2', 'caption/lost_M2-L2.png')
            .image('lostOne_M1-L3', 'caption/lostOne_M1-L3.png')
            .image('lostTwo_M1-L3', 'caption/lostTwo_M1-L3.png')
            .image('M1-L1', 'caption/M1-L1.png')
            .image('M1-L2', 'caption/M1-L2.png')
            .image('M1-L3', 'caption/M1-L3.png')
            .image('M2-L1', 'caption/M2-L1.png')
            .image('M2-L2', 'caption/M2-L2.png')
            .image('M2-L3', 'caption/M2-L3.png')
            .image('win_M1-L1', 'caption/win_M1-L1.png')
            .image('win_M1-L2', 'caption/win_M1-L2.png')
            .image('win_M1-L3', 'caption/win_M1-L3.png')
            .image('win_M2-L1', 'caption/win_M2-L1.png')
            .image('win_M2-L2', 'caption/win_M2-L2.png');
        //.image('win_M2-L3', 'caption/win_M2-L3.png');

        //Carga de atlas de animación de alas
        this.load.atlas('sprite_dragon', 'alas/sprite_dragon.png', 'alas/sprite_dragon_atlas.json');
        this.load.animation('sprite_dragonAnim', 'alas/sprite_dragon_anim.json');

        //Carga de botones
        this.load.image(['settings', 'play', 'info', 'menu', 'nombre', 'sound', 'sound_off', 'back', 'next', 'restart']);

        //Carga de elementos de la misión 1 - nivel 1
        //Carga de tiles para el mapa
        this.load.image('tiles', 'M1_N1/tiles/Tileset.png');
        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'M1_N1/tiles/maze_m1n1.json'); //Pruebas
        //Carga de canasta
        this.load.image('fruits', 'M1_N1/fruits/fruits.png');
        //Animaciones del dragon
        this.load.atlas('idle-sb', 'M1_N1/saphira/idle-sb.png', 'M1_N1/saphira/idle-sb_atlas.json');
        this.load.animation('idle-sbAnim', 'M1_N1/saphira/idle-sb_anim.json');

        //Carga de elementos de la mision 2 - nivel 1
        this.load.image('mision2_nivel1', 'M2_N1/backgrounds/back_game.jpg')
            //.image('restart', 'restart.png')
            .image('bullet', 'M2_N1/sprites/fire.png')
            .image('virus', 'M2_N1/sprites/slime_1.png')
            .image('bacterium', 'M2_N1/sprites/slime_2.png')
            //.image('life', 'heart.png')
            .image('soap', 'M2_N1/sprites/posion.png')
            .image('reload', 'M2_N1/sprites/reload.png')
            .image('powerup', 'M2_N1/sprites/powerup.png');

        //Animacion de saphira
        this.load.atlas('wake-saphira', 'saphira/wake-saphira.png', 'saphira/wake-saphira_atlas.json');
        this.load.animation('wake-saphiraAnim', 'saphira/wake-saphira_anim.json');

        //Carga de los elementos de la mission 1 - nivel 2
        this.load.image('bg_mis2n2', 'M1_N2/backgrounds/bg_mis2n2.png');

        //Carga de tiles para el mapa
        this.load.image('tiles_3', 'M1_N2/tiles/Mossy - TileSet.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map_3', 'M1_N2/tiles/mision.json'); //Pruebas

        //Carga de frutas        
        this.load.image('cereza', 'M1_N2/fruits/cereza.png')
            .image('durazno', 'M1_N2/fruits/durazno.png')
            .image('jitomate', 'M1_N2/fruits/jitomate.png')
            .image('lima', 'M1_N2/fruits/lima.png')
            .image('m_jitomate', 'M1_N2/fruits/m_jitomate.png')
            .image('m_manzana', 'M1_N2/fruits/m_manzana.png')
            .image('m_naranja', 'M1_N2/fruits/m_naranja.png')
            .image('m_pera', 'M1_N2/fruits/m_pera.png')
            .image('m_platano', 'M1_N2/fruits/m_platano.png')
            .image('m_zanahoria', 'M1_N2/fruits/m_zanahoria.png')
            .image('manzana', 'M1_N2/fruits/manzana.png')
            .image('naranja', 'M1_N2/fruits/naranja.png')
            .image('pera', 'M1_N2/fruits/pera.png')
            .image('platano', 'M1_N2/fruits/platano.png')
            .image('rabano', 'M1_N2/fruits/rabano.png')
            .image('uva', 'M1_N2/fruits/uva.png')
            .image('zanahoria', 'M1_N2/fruits/zanahoria.png');

        //Carga de enemigos
        this.load.atlas('slime_1', 'M1_N2/enemies/slime_1.png', 'M1_N2/enemies/slime_1_atlas.json');
        this.load.animation('slime_1Anim', 'M1_N2/enemies/slime_1_anim.json');
        this.load.atlas('slime_2', 'M1_N2/enemies/slime_2.png', 'M1_N2/enemies/slime_2_atlas.json');
        this.load.animation('slime_2Anim', 'M1_N2/enemies/slime_2_anim.json');

        //Carga de posión de recuperación
        this.load.image('health', 'M1_N2/fruits/posion.png');

        this.load.atlas('fly-l2', 'M1_N2/saphira/fly-l2.png', 'M1_N2/saphira/fly-l2_atlas.json');
        this.load.animation('fly-l2Anim', 'M1_N2/saphira/fly-l2_anim.json');

        //Carga de elementos de la mision 2 - nivel 2
        this.load.image('bg_m2n2', 'M2_N2/bg_mision2.png');
        //Carga de tiles para el mapa
        this.load.image('tiles_4', 'M2_N2/tiles/Tileset.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map_4', 'M2_N2/tiles/mision_vfinal.json'); //Pruebas

        //Carga de frutas        
        this.load.image('cereza1', 'M2_N2/fruits/cereza.png')
            .image('durazno1', 'M2_N2/fruits/durazno.png')
            .image('jitomate1', 'M2_N2/fruits/jitomate.png')
            .image('lima1', 'M2_N2/fruits/lima.png')
            .image('manzana1', 'M2_N2/fruits/manzana.png')
            .image('naranja1', 'M2_N2/fruits/naranja.png')
            .image('pera1', 'M2_N2/fruits/pera.png')
            .image('platano1', 'M2_N2/fruits/platano.png')
            .image('uva1', 'M2_N2/fruits/uva.png')
            .image('fire1', 'M2_N2/fire/fire.png');

        //Carga de enemigos
        this.load.atlas('slime_11', 'M2_N2/enemies/slime_1.png', 'M2_N2/enemies/slime_1_atlas.json');
        this.load.animation('slime_1Anim1', 'M2_N2/enemies/slime_1_anim.json');
        this.load.atlas('slime_21', 'M2_N2/enemies/slime_2.png', 'M2_N2/enemies/slime_2_atlas.json');
        this.load.animation('slime_2Anim1', 'M2_N2/enemies/slime_2_anim.json');


        //Animaciones del dragon
        this.load.atlas('fly-l3', 'M2_N2/saphira/fly-l3.png', 'M2_N2/saphira/fly-l3_atlas.json');
        this.load.animation('fly-l3Anim', 'M2_N2/saphira/fly-l3_anim.json');

        //Carga de musica
        this.load.audio("soundtrack", "../assets/musica/soundtrack.mp3");
        this.load.audio("m_fondo", "../assets/musica/dragon3.mp3");
        this.load.audio("m_logoE", '../assets/musica/au_logo.mp3');
        this.load.audio("m_logo", "../assets/musica/logo2.mp3");
        this.load.audio("m_logoLW", '../assets/musica/logoGame.mp3');
        this.load.audio("m_botones", "../assets/musica/prev_play.mp3");

    }

    create() {
        //Pantalla de inicio
        this.background = this.add.image(640, 360, 'background');

        //Iconos de sonido
        this.musica = this.add.image(1110, 70, 'sound').setInteractive();
        this.musica.setScale(0.6);
        this.musica_off = this.add.image(1110, 70, 'sound_off').setInteractive();
        this.musica_off.setScale(0.6);
        this.musica_off.setVisible(0);

        //Icono de herramientas
        this.settings = this.add.image(1200, 70, 'settings').setScale(0.6);

        //Icono menú
        this.menu = this.add.image(80, 70, 'menu').setScale(0.6);

        //Icono play
        this.play = this.add.image(1200, 650, 'play').setInteractive();
        this.play.setScale(0.6);

        //Pantalla con el logo de nuestro juego
        this.bg_color = this.add.image(640, 360, 'bg_negro').setScale(3);
        this.logo = this.add.image(640, -360, 'logo');

        //Animación de las alas
        this.alas = this.add.sprite(640, 360, 'sprite_dragon').setVisible(0);
        this.alas.setScale(0.3);
        this.alas.anims.play('alasanim');

        //Logo del juego
        this.logo_juego = this.add.image(640, 490, 'nombre').setVisible(0);
        this.logo_juego.setScale(0.2);

        //Musica de fondo
        this.fondo = this.sound.add("m_fondo");
        var musicConfig = {
            loop: true
        }
        //this.fondo.play(musicConfig);

        //Musica botones
        this.botones = this.sound.add("m_botones");

        //Musica logo
        this.m_logo = this.sound.add('m_logo');
        this.m_logo.play();

        //Musica logo juego
        this.m_logoGame = this.sound.add('m_logoLW');

        this.add.tween({
            targets: [this.logo],
            y: 360,
            ease: 'Power1',
            delay: 1000,
            duration: 3000,
        });

        this.time.addEvent({
            delay: 5000,
            callback: () => {
                this.bg_color.setVisible(0);
                this.logo.setVisible(0);
                this.alas.setVisible(1);
                this.fondo.play(musicConfig);
                this.m_logoGame.play();
            }
        });

        this.add.tween({
            targets: [this.alas],
            angle: 360,
            scale: 0.9,
            ease: 'Power1',
            delay: 5100,
        });

        this.add.tween({
            targets: [this.logo_juego],
            visible: 1,
            scale: 0.5,
            ease: 'Power1',
            delay: 5250,
        });

        this.musica.setVisible(1);
        this.musica_off.setVisible(0);

        //Eventos de los botones funcionales
        this.musica.on('pointerdown', function () {
            this.botones.play();
            this.musica.setVisible(0);
            this.musica_off.setVisible(1);
            this.fondo.pause();
        }, this);

        this.musica_off.on('pointerdown', function () {
            this.botones.play();
            this.musica.setVisible(1);
            this.musica_off.setVisible(0);
            this.fondo.play();
        }, this);

        this.play.on('pointerdown', function () {
            this.fondo.pause();
            this.botones.play();
            this.scene.start('Principal');
            this.scene.launch('UI');
        }, this);
    }

    update(time, delta) {
    }
}

export default Bootloader;
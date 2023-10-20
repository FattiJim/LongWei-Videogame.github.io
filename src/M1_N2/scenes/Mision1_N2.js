
let cursors;
class Mision1_N2 extends Phaser.Scene {
  constructor() {
    super({
      key: 'Mision1_N2'
    });
  }

  init() {
    console.log('Escena Mision 1 - Nivel 2');
    this.score = 0;
    this.scoreText;
    this.salud = 10;
    this.invincible = false;
  }


  create() {
    //Background del juego
    this.bg = this.add.image(1720, 360, 'bg_mis2n2');

    //Creación del mapa
    var map = this.make.tilemap({ key: 'map_3' });
    const tileset = map.addTilesetImage('Mossy - TileSet', 'tiles_3');
    const plataformas = map.createLayer('capa_1', tileset, 0, 0);
    plataformas.setScale(0.056);
    plataformas.setCollisionByProperty({ collides: true }); //Manejo de las colisiones

    //Creación del personaje en el mapa
    this.player = this.physics.add.sprite(100, 450, 'fly-l2');
    this.player.setData('life', 100);
    this.player.setBounce(0.1);
    this.player.anims.play('fly-l2');
    this.player.setScale(0.136);
    this.player.setGravityY(300);

    //Puntuación
    this.scoreText = this.add.text(1100, 70, this.score, { fontSize: '30px', fill: '#fff' });
    this.scoreText.setScrollFactor(0);
    this.foodIcon = this.add.image(1040, 70, 'fruits_icon').setScale(1.5);
    this.foodIcon.setScrollFactor(0);

    this.lifeText = this.add.text(930, 70, this.player.getData('life'), { fontSize: '30px', fill: '#fff' });
    this.lifeText.setScrollFactor(0);
    this.lifeIcon = this.add.image(890, 70, 'dragonFire').setScale(1.5);
    this.lifeIcon.setScrollFactor(0);

    //Posión para aumentar la vida
    this.health = this.physics.add.group();
    this.health.create(2687, 130, 'health');

    this.health.children.iterate((life) => {
      life.setScale(0.55);
      life.body.setAllowGravity(false); //Omitir gravedad
    });

    //Creación de enemigos
    this.enemies_one = this.physics.add.group();
    this.enemies_one.create(825, 615, 'slime_1');
    this.enemies_one.create(2120, 670, 'slime_1');
    this.enemies_one.playAnimation('slime1_idle');

    //Reduciendo tamaño de los enemigos 1
    this.enemies_one.children.iterate((enemy) => {
      enemy.setScale(0.7);
      enemy.body.setAllowGravity(false); //Omitir gravedad
    });

    this.enemies_two = this.physics.add.group();
    this.enemies_two.create(690, 330, 'slime_2');
    this.enemies_two.create(1145, 470, 'slime_2');
    this.enemies_two.create(1560, 410, 'slime_2');
    this.enemies_two.create(2460, 640, 'slime_2');
    this.enemies_two.playAnimation('slime2_idle');

    //Reduciendo tamaño de los enemigos 2
    this.enemies_two.children.iterate((enemy) => {
      enemy.setScale(0.6);
      enemy.body.setAllowGravity(false); //Omitir gravedad
    });

    //Movimiento sobre x del enemigo [0]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[0],
      x: 635,
      duration: 3000,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [1]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[1],
      x: 1905,
      duration: 3000,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [1]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[0],
      y: 180,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [2]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[1],
      y: 150,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: this.enemies_two.getChildren()[2],
      y: 50,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: this.enemies_two.getChildren()[3],
      y: 180,
      duration: 2000,
      yoyo: true,
      repeat: -1,
    });

    //Objetos del mapa
    this.fruitsC = this.physics.add.group();
    //Cerezas
    this.fruitsC.create(140, 220, 'cereza');
    this.fruitsC.create(160, 200, 'cereza');
    this.fruitsC.create(180, 220, 'cereza');
    this.fruitsC.create(273, 48, 'cereza');
    this.fruitsC.create(1560, 230, 'cereza');
    this.fruitsC.create(1560, 260, 'cereza');
    this.fruitsC.create(1560, 290, 'cereza');
    this.fruitsC.create(1560, 320, 'cereza');
    this.fruitsC.create(1560, 350, 'cereza');
    this.fruitsC.create(2950, 620, 'cereza');
    this.fruitsC.create(2990, 620, 'cereza');
    this.fruitsC.create(2970, 600, 'cereza');
    this.fruitsC.create(2910, 155, 'cereza');
    this.fruitsC.create(2910, 190, 'cereza');
    this.fruitsC.create(2940, 155, 'cereza');
    this.fruitsC.create(3300, 290, 'cereza');
    this.fruitsC.create(3280, 270, 'cereza');
    this.fruitsC.create(3320, 270, 'cereza');
    this.fruitsC.create(3300, 250, 'cereza');
    //Limas
    this.fruitsC.create(185, 390, 'lima');
    this.fruitsC.create(185, 360, 'lima');
    this.fruitsC.create(185, 330, 'lima');
    this.fruitsC.create(2680, 390, 'lima');
    this.fruitsC.create(2710, 390, 'lima');
    this.fruitsC.create(2650, 350, 'lima');
    this.fruitsC.create(2680, 360, 'lima');
    //Uvas
    this.fruitsC.create(315, 330, 'uva');
    this.fruitsC.create(295, 310, 'uva');
    this.fruitsC.create(335, 310, 'uva');
    this.fruitsC.create(295, 280, 'uva');
    this.fruitsC.create(335, 280, 'uva');
    this.fruitsC.create(315, 260, 'uva');
    this.fruitsC.create(2420, 640, 'uva');
    this.fruitsC.create(2400, 620, 'uva');
    this.fruitsC.create(2380, 640, 'uva');
    this.fruitsC.create(3080, 525, 'uva');
    this.fruitsC.create(3080, 495, 'uva');
    this.fruitsC.create(3080, 465, 'uva');
    //Jitomates
    this.fruitsC.create(290, 540, 'jitomate');
    this.fruitsC.create(320, 530, 'jitomate');
    this.fruitsC.create(350, 525, 'jitomate');
    this.fruitsC.create(380, 530, 'jitomate');
    this.fruitsC.create(410, 540, 'jitomate');
    this.fruitsC.create(410, 540, 'jitomate');
    this.fruitsC.create(3340, 640, 'jitomate');
    this.fruitsC.create(3355, 615, 'jitomate');
    this.fruitsC.create(3375, 600, 'jitomate');
    //Manzana
    this.fruitsC.create(580, 500, 'manzana');
    this.fruitsC.create(560, 470, 'manzana');
    this.fruitsC.create(540, 500, 'manzana');
    this.fruitsC.create(960, 240, 'manzana');
    this.fruitsC.create(960, 210, 'manzana');
    this.fruitsC.create(960, 180, 'manzana');
    this.fruitsC.create(985, 240, 'manzana');
    this.fruitsC.create(985, 210, 'manzana');
    //Pera
    this.fruitsC.create(560, 615, 'pera');
    this.fruitsC.create(560, 585, 'pera');
    this.fruitsC.create(530, 615, 'pera');
    this.fruitsC.create(590, 615, 'pera');
    this.fruitsC.create(590, 615, 'pera');
    this.fruitsC.create(1735, 385, 'pera');
    this.fruitsC.create(1830, 445, 'pera');
    this.fruitsC.create(1860, 445, 'pera');
    this.fruitsC.create(1965, 500, 'pera');
    this.fruitsC.create(1935, 500, 'pera');
    this.fruitsC.create(1995, 500, 'pera');
    //Zanahoria
    this.fruitsC.create(730, 500, 'zanahoria');
    this.fruitsC.create(710, 470, 'zanahoria');
    this.fruitsC.create(750, 470, 'zanahoria');
    //Platanos
    this.fruitsC.create(905, 615, 'platano');
    this.fruitsC.create(880, 615, 'platano');
    this.fruitsC.create(930, 615, 'platano');
    this.fruitsC.create(905, 580, 'platano');
    this.fruitsC.create(2765, 245, 'platano');
    this.fruitsC.create(3280, 555, 'platano');
    this.fruitsC.create(3300, 535, 'platano');
    this.fruitsC.create(3320, 515, 'platano');
    this.fruitsC.create(3340, 495, 'platano');
    this.fruitsC.create(3360, 470, 'platano');
    //Rabanos
    this.fruitsC.create(1270, 240, 'rabano');
    this.fruitsC.create(1270, 210, 'rabano');
    this.fruitsC.create(1300, 210, 'rabano');
    //Naranjas
    this.fruitsC.create(2690, 90, 'naranja');
    this.fruitsC.create(2660, 110, 'naranja');
    this.fruitsC.create(2720, 110, 'naranja');
    this.fruitsC.create(2655, 140, 'naranja');
    this.fruitsC.create(2725, 140, 'naranja');
    this.fruitsC.create(2670, 170, 'naranja');
    this.fruitsC.create(2710, 170, 'naranja');
    //Durazanos
    this.fruitsC.create(1295, 430, 'durazno');
    this.fruitsC.create(1275, 405, 'durazno');
    this.fruitsC.create(1250, 385, 'durazno');
    this.fruitsC.create(1225, 370, 'durazno');
    this.fruitsC.create(2260, 670, 'durazno');
    this.fruitsC.create(2230, 670, 'durazno');
    this.fruitsC.create(2200, 670, 'durazno');
    this.fruitsC.create(2170, 670, 'durazno');

    this.fruitsC.children.iterate((fruit) => {
      fruit.setScale(0.5);
      fruit.body.setAllowGravity(false); //Omitir gravedad
    });

    //386 238
    this.fruitsM = this.physics.add.group();
    //Mitad de jitomate
    this.fruitsM.create(390, 245, 'm_jitomate');
    this.fruitsM.create(390, 220, 'm_jitomate');
    this.fruitsM.create(360, 220, 'm_jitomate');
    this.fruitsM.create(420, 220, 'm_jitomate');
    //Platanos pelados
    this.fruitsM.create(780, 330, 'm_platano');
    this.fruitsM.create(780, 300, 'm_platano');
    this.fruitsM.create(780, 270, 'm_platano');
    this.fruitsM.create(755, 330, 'm_platano');
    this.fruitsM.create(755, 300, 'm_platano');
    this.fruitsM.create(730, 330, 'm_platano');
    this.fruitsM.create(2300, 440, 'm_platano');
    this.fruitsM.create(2300, 410, 'm_platano');
    this.fruitsM.create(2300, 380, 'm_platano');
    //Mitad naranja
    this.fruitsM.create(905, 470, 'm_naranja');
    this.fruitsM.create(880, 500, 'm_naranja');
    this.fruitsM.create(930, 500, 'm_naranja');
    this.fruitsM.create(1360, 185, 'm_naranja');
    this.fruitsM.create(2810, 675, 'm_naranja');
    this.fruitsM.create(2810, 645, 'm_naranja');
    this.fruitsM.create(2780, 675, 'm_naranja');
    this.fruitsM.create(2780, 645, 'm_naranja');
    this.fruitsM.create(2750, 675, 'm_naranja');
    this.fruitsM.create(3250, 405, 'm_naranja');
    this.fruitsM.create(3230, 375, 'm_naranja');
    this.fruitsM.create(3270, 375, 'm_naranja');
    this.fruitsM.create(3250, 345, 'm_naranja');
    this.fruitsM.create(3210, 345, 'm_naranja');
    this.fruitsM.create(3290, 345, 'm_naranja');
    //Mitad manzana
    this.fruitsM.create(2120, 305, 'm_manzana');
    this.fruitsM.create(2090, 305, 'm_manzana');
    this.fruitsM.create(2060, 305, 'm_manzana');
    this.fruitsM.create(2030, 305, 'm_manzana');
    this.fruitsM.create(2000, 305, 'm_manzana');
    this.fruitsM.create(1970, 305, 'm_manzana');
    this.fruitsM.create(1800, 670, 'm_manzana');
    this.fruitsM.create(1830, 670, 'm_manzana');
    this.fruitsM.create(1860, 670, 'm_manzana');
    this.fruitsM.create(3250, 640, 'm_manzana');
    this.fruitsM.create(3225, 640, 'm_manzana');
    this.fruitsM.create(3200, 640, 'm_manzana');

    this.fruitsM.children.iterate((fruit) => {
      fruit.setScale(0.5);
      fruit.body.setAllowGravity(false); //Omitir gravedad
    });

    //Colisión con el mapa y el personaje
    this.physics.add.collider(this.player, plataformas);
    this.physics.add.overlap(this.player, [this.enemies_one, this.enemies_two], this.hitPlayer, null, this);
    this.physics.add.overlap(this.fruitsC, this.player, this.collectFruitC, null, this);
    this.physics.add.overlap(this.fruitsM, this.player, this.collectFruitM, null, this);
    this.physics.add.overlap(this.health, this.player, this.lifeC, null, this);

    //Manejo de cámara
    const camera = this.cameras.main;
    camera.startFollow(this.player);
    camera.setBounds(0, 0, 3440, 720);

    cursors = this.input.keyboard.createCursorKeys();

  }

  update(time, delta) {
    this.playerWin();
    const speed = 250;
    const jump = 150;

    this.player.body.setVelocityX(0);

    //Movimienyto horizontal
    if (cursors.left.isDown) {
      this.player.body.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      this.player.body.setVelocityX(speed);
    }

    //Movimiento vertical
    if (cursors.up.isDown) {
      this.player.body.setVelocityY(-jump);
    } else if (cursors.down.isDown) {
      this.player.body.setVelocityY(jump);
    }

    if (cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-360);
    }

    //Actualización de las animaciones
    if (cursors.left.isDown) {
      this.player.flipX = true;
      this.player.anims.play('fly-l2', true);
    } else if (cursors.right.isDown) {
      this.player.flipX = false;
      this.player.anims.play('fly-l2', true);
    } else if (cursors.up.isDown) {
      this.player.anims.play('fly-l2', true);
    } else if (cursors.down.isDown) {
      this.player.anims.play('fly-l2', true);
    } else {
      this.player.anims.play('fly-l2', true);
    }
  }

  collectFruitC(player, fruitC) {
    fruitC.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(this.score);
    console.log(this.score);
  }

  collectFruitM(player, fruitM) {
    fruitM.disableBody(true, true);
    this.score += 5;
    this.scoreText.setText(this.score);
    console.log(this.score);
  }

  lifeC(player, life) {
    life.disableBody(true, true);
    if (player.getData('life') < 100) {
      var totalVida = player.getData('life');
      var aumento = 100 - totalVida;
      player.setData('life', player.getData('life') + aumento);
    }
  }

  hitPlayer(player, enemy) {
    if (!this.invincible) {
      player.setVelocityX(0);
      player.setVelocityY(0);
      this.invincible = true;
      player.setData('life', player.getData('life') - this.salud);
      this.lifeText.setText(player.getData('life'));
      player.setTint(0x1abc9c);
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.invincible = false;
          player.clearTint();
        }
      });

      if ((player.getData('life') - this.salud) <= 0) {
        this.scene.start('LostM1L2');
      }
    }
  }

  playerWin() {
    if (this.player.x >= 3345 && this.score >= 1000) {
      this.scene.start('WinM1L2');
    } else if (this.player.y >= 720) {
      this.scene.start('LostM1L2');
    }
  }

}

export default Mision1_N2;
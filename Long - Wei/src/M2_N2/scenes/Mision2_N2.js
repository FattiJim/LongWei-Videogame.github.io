let cursors;

class Mision2_N2 extends Phaser.Scene {
  constructor() {
    super({
      key: 'Mision2_N2'
    });
  }

  init() {
    console.log('Escena Mision 2 - nivel 2');
    this.score = 0;
    this.scoreText;
    this.bullet = 0;
    this.bulletText;
    this.salud = 10;
    this.moreHealth = 100;
    this.invincible = false;
    //Registrando evento de vidas

  }

  preload() {

    
  }

  create() {
    // //Background del juegos
    // this.bg = this.add.image(640, 2100, 'bg_m2n2').setScale(0, 1.5);

    //Creación del mapa
    var map = this.make.tilemap({ key: 'map_4' });
    const tileset = map.addTilesetImage('Tileset', 'tiles_4');
     //Background del juegos
    this.bg = this.add.image(640, 2100, 'bg_m2n2').setScale(0, 1.5);
    this.plataformas = map.createLayer('platforms', tileset, 0, 0);
    this.water_platforms = map.createLayer('water_platforms', tileset, 0,0);
    this.battle = map.createLayer('war', tileset, 0, 0);
    this.battle.setVisible(false);
    
    // Creacion de los fuegos
    const fires = this.physics.add.group();
    const firesLayer = map.getObjectLayer('fires');
    firesLayer.objects.forEach(fireObj => {
      fires.get(fireObj.x, fireObj.y - 10, 'fire1');
    });

    //Creación de las frutas
    //Capa de cerezas
    const cherries = this.physics.add.group();
    const cherriesLayer = map.getObjectLayer('cerezas');
    cherriesLayer.objects.forEach(cherryObj => {
      cherries.get(cherryObj.x, cherryObj.y - 5, 'cereza1');
    });
    //Capa de duraznos
    const peaches = this.physics.add.group();
    const peachesLayer = map.getObjectLayer('duraznos');
    peachesLayer.objects.forEach(peachObj => {
      peaches.get(peachObj.x, peachObj.y - 10, 'durazno1');
    });
    //Capa de jitomate
    const tomatos = this.physics.add.group();
    const tomatosLayer = map.getObjectLayer('jitomates');
    tomatosLayer.objects.forEach(tomatoObj => {
      tomatos.get(tomatoObj.x, tomatoObj.y - 10, 'jitomate1');
    });
    //Capa de limas 
    const limes = this.physics.add.group();
    const limesLayer = map.getObjectLayer('limas');
    limesLayer.objects.forEach(limaObj => {
      limes.get(limaObj.x, limaObj.y - 10, 'lima1');
    });
    //Capa de mazanas
    const apples = this.physics.add.group();
    const applesLayer = map.getObjectLayer('manzanas');
    applesLayer.objects.forEach(appleObj => {
      apples.get(appleObj.x, appleObj.y - 10, 'manzana1');
    });
    //Capa de naranjas
    const oranges = this.physics.add.group();
    const orangesLayer = map.getObjectLayer('naranjas');
    orangesLayer.objects.forEach(orangeObj => {
      oranges.get(orangeObj.x, orangeObj.y - 10, 'naranja1');
    });
    //Capa de peras
    const pears = this.physics.add.group();
    const pearsLayer = map.getObjectLayer('peras');
    pearsLayer.objects.forEach(pearObj => {
      pears.get(pearObj.x, pearObj.y - 10, 'pera1');
    });
    //Capa de platanos
    const bananas = this.physics.add.group();
    const bananasLayer = map.getObjectLayer('platanos');
    bananasLayer.objects.forEach(bananaObj => {
      bananas.get(bananaObj.x, bananaObj.y, 'platano1');
    });
    //Capa de uvas
    const grapes = this.physics.add.group();
    const grapesLayer = map.getObjectLayer('uvas');
    grapesLayer.objects.forEach(grapeObj => {
      grapes.get(grapeObj.x, grapeObj.y - 10, 'uva1');
    });
    
    this.plataformas.setCollisionByProperty({ collides: true }); //Manejo de las colisiones
    this.water_platforms.setCollisionByProperty({ collides: true }); //Manejo de las colisiones
    this.battle.setCollisionByProperty({ collides: true }); //Manejo de las colisiones

    //Creación del personaje en el mapa
    this.player = this.physics.add.sprite(640, 3500, 'fly-l3').setScale(0.9);
    this.player.setData('life', 100);
    this.player.setBounce(0.1);
    this.player.anims.play('fly-l3');
    this.player.setScale(0.15);
    this.player.setGravityY(300);

    //Creación de los enemigos
    this.enemies_one = this.physics.add.group();
    this.enemies_one.create(260, 2795, 'slime_11');
    this.enemies_one.create(510, 2413, 'slime_11');
    this.enemies_one.create(670, 2124, 'slime_11');
    this.enemies_one.create(640, 1195, 'slime_11');
    this.enemies_one.playAnimation('slime1_idle');

    //Reduciendo tamaño de los enemigos 1
    this.enemies_one.children.iterate((enemy) => {
      enemy.setScale(0.7);
      enemy.body.setAllowGravity(false); //Omitir gravedad
    });

    //Movimientos con tweens de los enemigos 1
    //Movimiento sobre x del enemigo [0]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[0],
      x: 900,
      duration: 3500,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [1]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[1],
      x: 260,
      duration: 2000,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [2]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[2],
      x: 405,
      duration: 2500,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [3]
    this.tweens.add({
      targets: this.enemies_one.getChildren()[3],
      x: 840,
      duration: 2000,
      flipX: true,
      yoyo: true,
      repeat: -1,
    });
    
    this.enemies_two = this.physics.add.group();
    this.enemies_two.create(997, 3085, 'slime_21');
    this.enemies_two.create(550, 3435, 'slime_21');
    this.enemies_two.create(290, 2605, 'slime_21');
    this.enemies_two.create(840, 2315, 'slime_21');
    this.enemies_two.create(270, 2030, 'slime_21');
    this.enemies_two.create(1155, 1935, 'slime_21');
    this.enemies_two.create(390, 1070, 'slime_21');
    this.enemies_two.playAnimation('slime2_idle');

    //Reduciendo tamaño de los enemigos 2
    this.enemies_two.children.iterate((enemy) => {
      enemy.setScale(0.8);
      enemy.body.setAllowGravity(false); //Omitir gravedad
    });

    //Movimientos con tweens de los enemigos 2
    //Movimiento sobre x del enemigo [0]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[0],
      y: 2893,
      duration: 1300,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [1]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[1],
      y: 3179,
      duration: 1300,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [2]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[2],
      y: 2509,
      duration: 1300,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [3]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[3],
      y: 1739,
      duration: 2200,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [4]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[4],
      y: 1646,
      duration: 2200,
      yoyo: true,
      repeat: -1,
    });
    
    //Movimiento sobre x del enemigo [5]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[5],
      y: 1295,
      duration: 2700,
      yoyo: true,
      repeat: -1,
    });

    //Movimiento sobre x del enemigo [5]
    this.tweens.add({
      targets: this.enemies_two.getChildren()[6],
      y: 740,
      duration: 2200,
      yoyo: true,
      repeat: -1,
    });

    //Puntuación
    this.scoreText = this.add.text(1100, 70, this.score, { fontSize: '30px', fill: '#fff' });
    this.scoreText.setScrollFactor(0);
    this.foodIcon = this.add.image(1040, 70, 'fruits_icon').setScale(1.5);
    this.foodIcon.setScrollFactor(0);

    this.lifeText = this.add.text(930, 70, this.player.getData('life'), { fontSize: '30px', fill: '#fff' });
    this.lifeText.setScrollFactor(0);
    this.lifeIcon = this.add.image(890, 70, 'dragonFire').setScale(1.5);
    this.lifeIcon.setScrollFactor(0);

    //Debug - comprobación de las colisiones del juegos
    //const debugGraphics = this.add.graphics().setAlpha(0.7);
    //water_platforms.renderDebug(debugGraphics, {
         //tileColor: null,
         //collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
         //faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    //});

    //Colisión con el mapa y el personaje
    this.physics.add.collider(this.player, this.plataformas);
    this.physics.add.collider(this.player, this.water_platforms, this.playerFall, null, this);
    this.physics.add.overlap(this.player, [cherries, peaches, tomatos,
                                           limes, apples, oranges, pears,
                                           bananas, grapes, fires], this.collectFruits, null, this);
    this.physics.add.overlap(this.player, [this.enemies_one, this.enemies_two], 
                             this.hitPlayer, null, this);

    //Manejo de cámara
    this.camera = this.cameras.main;
    this.camera.startFollow(this.player);
    this.camera.setBounds(0, 0, 1280, 3616);

    cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    const speed = 250;
    const jump = 150;
    this.addHealth();
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

    //Actualización de las animaciones
    if (cursors.left.isDown) {
      this.player.flipX = true;
      this.player.anims.play('fly-l3', true);
    } else if (cursors.right.isDown) {
      this.player.flipX = false;
      this.player.anims.play('fly-l3', true);
    } else if (cursors.up.isDown) {
      this.player.anims.play('fly-l3', true);
    } else if (cursors.down.isDown) {
      this.player.anims.play('fly-l3', true);
    } else {
      this.player.anims.play('fly-l3', true);
    }

    //Verificación de pantalla para batalla final
    if(this.player.y <= 720){
      this.scene.start('WinM2L2');
    }
  
  }
  //Agregar vida al personaje
  addHealth(){
    if(this.player.getData('life') < 100 && this.score > 100){
      this.score = this.score - 100;
      this.scoreText.setText(this.score);
      this.player.setData('life', this.player.getData('life') + this.salud);
      this.lifeText.setText(this.player.getData('life'));
    }
  }
  
  //Colision entre el personaje y los enemigos
  hitPlayer(player, enemy){
    if(!this.invincible){
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

      if((player.getData('life')- this.salud) <= 0){
        this.scene.start('LostM2L2');
      }
    }
  }

  //Recolectar frutas
  collectFruits(player, fruit) {
    fruit.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText(this.score);
  }

  playerFall(player){
    if(player.getData('life') > 0){
      player.setData('life', player.getData('life') - 10);
      this.lifeText.setText(player.getData('life'));
    } else if(player.getData('life') <= 0){
      this.scene.restart();
    }
  }

}

export default Mision2_N2;
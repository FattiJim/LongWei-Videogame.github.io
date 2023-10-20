let cursors;
class Mision1_N1 extends Phaser.Scene {
  constructor() {
    super({
      key: 'Mision1_N1'
    });
  }

  init() {
    console.log('Escena Misión 1 - Nivel 1');
    this.food = 0;
    this.foodText;
  }

  create() {
    //Creación del mapa
    var map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('Tileset', 'tiles');
    this.maze = map.createLayer('maze', tileset, 0, 0);

    //Creación de las frutas
    const fruits = this.physics.add.group();
    const fruitsLayer = map.getObjectLayer('canasta');
    fruitsLayer.objects.forEach(fruitObj => {
      fruits.get(fruitObj.x + fruitObj.width * 0.5, fruitObj.y - fruitObj.height * 0.5, 'fruits');
    });
    
    this.maze.setCollisionByProperty({ collides: true }); //Manejo de las colisiones

    //Creación del personaje en el mapa
    this.player = this.physics.add.sprite(1312, 704, 'idle-sb');
    this.player.setData('life', 100);
    this.player.setBounce(0.1);
    this.player.anims.play('idle-sb');
    this.player.setScale(0.2);

    this.registry.events.emit('vida', this.player.getData('life'));

    //Puntuación
    this.foodText = this.add.text(1100, 70, '0', { fontSize: '30px', fill: '#fff' });
    this.foodText.setScrollFactor(0);
    this.foodIcon = this.add.image(1040, 70, 'fruits_icon').setScale(1.5);
    this.foodIcon.setScrollFactor(0);

    this.lifeText = this.add.text(930, 70, '100', { fontSize: '30px', fill: '#fff' });
    this.lifeText.setScrollFactor(0);
    this.lifeIcon = this.add.image(890, 70, 'dragonFire').setScale(1.5);

    //Colisión con el mapa y el personaje
    this.physics.add.collider(this.player, this.maze);
    this.physics.add.overlap(this.player, fruits, this.collectFruits, null, this);

    //Manejo de cámara
    this.camera = this.cameras.main;
    this.camera.startFollow(this.player);
    this.camera.setBounds(0, 0, 2560, 1440);

    this.cameras.main.zoomTo(2, 1000, 'Sine.easeInOut'); 

    cursors = this.input.keyboard.createCursorKeys();

  }

  update(time, delta) {
    const speed = 100;
    const jump = 100;

    //Condicional para estar revisando si el usuario ganó o no
    this.playerWins();

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
      this.player.anims.play('idle-sb', true);
    } else if (cursors.right.isDown) {
      this.player.flipX = false;
      this.player.anims.play('idle-sb', true);
    } else if (cursors.up.isDown) {
      this.player.anims.play('idle-sb', true);
    } else if (cursors.down.isDown) {
      this.player.anims.play('idle-sb', true);
    } else {
      this.player.anims.play('idle-sb', true);
    }
  }
  
  playerWins(){
    if(this.food >= 24){
      this.scene.start('WinM1L1');
    }
  }

  //Recolectar frutas
  collectFruits(player, fruit) {
    fruit.disableBody(true, true);
    this.food += 1;
    console.log(this.food);
    this.registry.events.emit('fruits', this.food);
    this.foodText.setText(this.food);
  }

}

export default Mision1_N1;
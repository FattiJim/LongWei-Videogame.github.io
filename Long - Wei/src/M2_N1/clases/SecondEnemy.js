//A diferencia del primer enemigo, este necesita varios golpes para
//desaparecer y esta dotado de física para que su dirección
//cambie cuando colisione con los disparos
export default class SecondEnemy extends Phaser.Physics.Arcade.Group {
    constructor(physicsWorld, scene) {
        super(physicsWorld, scene);
    }
    
    newItem(){
        this.create( 
             Phaser.Math.Between(0, this.scene.scale.width), 80, 'bacterium')
             .setActive(true)
             .setVisible(true)
             .setGravityY(400)
             .setCollideWorldBounds(true)
             .setDepth(2)
             .setCircle(230)
             .setBounce(1)
             .setScale(0.28)
             .setVelocityX((Phaser.Math.Between(0, 1) ? 180 : -180))
             .hitsToKill = 4;
    }
}
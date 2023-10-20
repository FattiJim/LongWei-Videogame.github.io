export default class Player extends Phaser.Physics.Arcade.Sprite {
    //Hereda de Phaser.Physics.Arcade.Sprite para que los objetos
    //tengan las propiedades y metodos de los sprites incluido las físicas

    constructor(scene, x, y, sprite) {
        super(scene, x, y, sprite);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);

        this.init();
    }

    init(){
        this
            .setBounce(0.2)
            .setCollideWorldBounds(true)
            .setGravityY(300)
            .setDepth(2)
    }

}
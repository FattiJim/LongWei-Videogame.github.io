import FirstEnemy from "../clases/FirstEnemy.js";
import SecondEnemy from "../clases/SecondEnemy.js";
import Player from "../clases/Player.js";
import Bullet from "../clases/Bullet.js";
import Powerup from "../clases/Powerup.js";

class Mision2_N1 extends Phaser.Scene {
    constructor() {
        super('Mision2_N1');
    }

    init() {
        console.log('Mision 2 - Nivel 1');
        //Variable para creación de enemigos
        this.respawn = 0;
        this.respawnInterval = 3000;
        this.scoreText = "";
        this.score = 0;
        this.lifesCounter = 5;
        this.lifesText = "";
        this.win = 250; //Gana el juego cuando tiene la puntuación
        this.enemiesGlobalCounter = 0;
        this.invincible = false;
        this.ammo = 30;
        this.ammoText = "";
        this.powerupCounter = 0;
    }

    create() {
        //Textos
        this.scoreText = this.add.text(590, 60, this.score,
        { fontStyle: 'strong', font: '30px Consolas', fill: 'beige' });
        this.scoreText.setDepth(1);
        this.scoreIcon = this.add.image(540, 70, 'slime_1').setScale(0.6);
        this.scoreIcon.setDepth(1);

        this.lifesText = this.add.text(930, 60, this.lifesCounter, 
        { fontStyle: 'strong', align: 'right', font: '25px Consolas', fill: 'beige' });
        this.lifesText.setDepth(1);
        this.lifesIcon = this.add.image(880, 70, 'dragonFire').setScale(1.5);
        this.lifesIcon.setDepth(1);

        this.ammoText = this.add.text(50, 140, 'Fuego: ' + this.ammo,
        { fontStyle: 'strong', align: 'right',font: '25px Consolas', fill: 'beige' })
        this.ammoText.setDepth(1);

        //cursor para mover al personaje
        this.cursors = this.input.keyboard.createCursorKeys();

        //Fondo de nuestro juego
        this.background = this.add.image(640, 360, 'mision2_nivel1').setScale(1.3);
        //Creacion de sprites
        //this.lifeSprite = this.add.image(1000, 80, 'heart').setDepth(1).setScale(0.8);
        this.soapImage = this.physics.add.image(40, 720-50, 'soap');
        this.soapImage.setActive(true);
        this.soapImage.setDepth(1);
        this.soapImage.setVisible(false);
        this.reloadImage = this.add.image(50, 720-110, 'reload');
        this.reloadImage.setVisible(false);

        //Player
        this.player = new Player(this, 640, 720, 'wake-saphira').setScale(0.5);

        //Groups
        this.enemies_GroupOne = new FirstEnemy(this.physics.world, this);
        this.enemies_GroupTwo = new SecondEnemy(this.physics.world, this);
        this.bulletsGroup = new Bullet(this.physics.world, this);
        this.powerupGroup = new Powerup(this.physics.world, this);
        

        //Colisiones entre personaje - enemigos - balas
        this.physics.add.overlap(this.player, [this.enemies_GroupOne, this.enemies_GroupTwo,
                                 this.powerupGroup], this.hitPlayer, null, this);
        this.physics.add.collider(this.bulletsGroup, [this.enemies_GroupOne, this.enemies_GroupTwo],
                                  this.hitEnemies, null, this);
        this.physics.add.collider(this.bulletsGroup, this.powerupGroup, this.hitPowerup, null, this);
        this.physics.add.overlap(this.player, this.soapImage, this.reloadAmmo, null, this);
    }

    update(time, delta) {

        //Creación de enemigos utilizando time
        if(time > this.respawnInterval && this.respawn == 0){ //Controla la aparicion de enemigos cuando se reinicia la escena
            this.respawn = Math.trunc(time);
        }

        if (time > this.respawn){ //Aqui se controla el powerup
            //Powerup
            if(this.enemiesGlobalCounter % 15 == 0 && this.enemiesGlobalCounter != 0){
                this.powerupGroup.newItem();
            }

            if(this.enemiesGlobalCounter % 5 == 0 && this.enemiesGlobalCounter != 0){
                if(this.respawnInterval > 600){
                    this.respawnInterval -= 100;
                }
                this.addEnemy(0);
            }
            else {
                this.addEnemy(1);
            }
            this.respawn += this.respawnInterval;
        }

        //Input Controls
        if(this.input.keyboard.checkDown(this.cursors.space, 250)){
            this.player.setVelocity(0, 0);
            this.fire();
        }
        else if(this.cursors.left.isDown){
            this.player.setVelocityX(-250);
            this.player.flipX = true;
            this.player.anims.play('wake-saphira');

        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(250);
            this.player.flipX = false;
            this.player.anims.play('wake-saphira');
        }
        else {
            this.player.setVelocityX(0);
        }
    }

    reloadAmmo(){
        if(this.ammo === 0){
            this.ammo = 30;
            var randomX = Phaser.Math.Between(40, 640-50);

            this.reloadImage.setX(randomX).setActive(false).setVisible(false);

            this.soapImage.setX(randomX).setActive(false).setVisible(false);
            this.ammoText.setText('Fuego: ' + this.ammo)
        }
    }

     //Funciones para detectar las colisiones
     hitPlayer(player, enemy){
        if(!this.invincible){
            this.invincible = true;
            this.lifesCounter--;
            this.lifesText.setText(this.lifesCounter);
            enemy.destroy();
            player.setTint(0x1abc9c);
            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.invincible = false;
                    player.clearTint();
                }
            });

            this.cameras.main.shake(1000, 0.02); //Duración de 0 a 1

            if(this.lifesCounter < 1){
                this.registry.events.emit('vidas', 0);
                this.enemies_GroupOne.clear(true, true); //clear([removeFromScene], [destroyChild])
                this.enemies_GroupTwo.clear(true, true);
                this.bulletsGroup.clear(true, true);
                this.scene.start('LostM2L1');
            }
        }
    }

    hitEnemies(bullet, enemy){
       bullet.setVisible(false);
       bullet.setActive(false);
       bullet.destroy();

       enemy.hitsToKill--;

       if(enemy.hitsToKill == 0){
            enemy.destroy();
            this.score += 10;
            this.scoreText.setText(this.score);

            if(this.score % this.win == 0){
                // this.lifesCounter++;
                // this.lifesText.setText('X ' + this.lifesCounter);
                //Emitiendo el evento
                if(this.lifesCounter == 3){
                    this.registry.events.emit('vidas', 3);
                } else if( this.lifesCounter == 2){
                    this.registry.events.emit('vidas', 2);
                } else {
                    this.registry.events.emit('vidas', 1);
                }
                this.scene.start('WinM2L1');
            }
       }
    }

    hitsPowerup(bullet, bubble) {
        this.hitEnemies(bullet, bubble);
        this.powerupCounter = 10;
    }

    //Metodo para saber que tipo de enemigo crear
    addEnemy(type){
        this.enemiesGlobalCounter++;

        switch(type){
            case 0:
                this.enemies_GroupTwo.newItem();
                break;
            default:
                this.enemies_GroupOne.newItem();
        }
    }

    fire() {
        if(this.ammo >= 1 && this.powerupCounter === 0){
            this.bulletsGroup.newItem();
            this.ammo--;
            this.ammoText.setText('Fuego: ' + this.ammo);
        }

        if(this.ammo == 0 && this.powerupCounter === 0){
            this.reloadImage.setVisible(true).setActive(true);
            this.soapImage.setVisible(true).setActive(true);
        }

        if(this.powerupCounter > 0){
            this.bulletsGroup.newDoubleItem();
            this.powerupCounter--;
        }
    } 
}
export default Mision2_N1;
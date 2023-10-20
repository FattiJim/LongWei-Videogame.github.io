var ganadores = []
var res = "";

class Mision_Final extends Phaser.Scene {
  constructor() {
    super({
      key: 'Mision_Final'
    });
  }

  init() {
    console.log('Escena Mision Final');
  }

  preload() {
    this.load.path = './assets/M_Final/piezas1/';
    this.load.image(['fila-1-columna-1', 'fila-1-columna-2', 'fila-1-columna-3', 'fila-1-columna-4', 'fila-1-columna-5', "fila-1-columna-6",
                    'fila-2-columna-1', 'fila-2-columna-2', 'fila-2-columna-3', 'fila-2-columna-4', 'fila-2-columna-5', "fila-2-columna-6",
                    'fila-3-columna-1', 'fila-3-columna-2', 'fila-3-columna-3', 'fila-3-columna-4', 'fila-3-columna-5', "fila-3-columna-6",]);
    this.load.image("drop", "../drop.png");
    this.load.image("bg", "../bg(1).png");

  }

  create() {
    //Uso del teclado
   
    const KeyCodes = Phaser.Input.Keyboard.KeyCodes;

    this.bg = this.add.image(0, 0, "bg").setOrigin(0, 0).setDepth(-1);

    var rotaciones = [0, 0.2, 0.5, 0.7, 1];

    this.pz1 = this.add.image(900, 650, "fila-1-columna-1").setInteractive().setRotation(Math.random(rotaciones));
    this.pz13 = this.add.image(260, 240, "fila-1-columna-2").setInteractive().setRotation(Math.random(rotaciones));
    this.pz16 = this.add.image(340,640, "fila-1-columna-3").setInteractive().setRotation(Math.random(rotaciones));
    this.pz12 = this.add.image(300, 80, "fila-1-columna-4").setInteractive().setRotation(Math.random(rotaciones));
    this.pz7 = this.add.image(630, 650, "fila-1-columna-5").setInteractive().setRotation(Math.random(rotaciones));
    this.pz3 = this.add.image(630, 80, "fila-1-columna-6").setInteractive().setRotation(Math.random(rotaciones));

    this.pz2 = this.add.image(1140, 230, "fila-2-columna-1").setInteractive().setRotation(Math.random(rotaciones));
    this.pz4 = this.add.image(1070, 560, "fila-2-columna-2").setInteractive().setRotation(Math.random(rotaciones));
    this.pz5 = this.add.image(770,590, "fila-2-columna-3").setInteractive().setRotation(Math.random(rotaciones));
    this.pz10 = this.add.image(800, 90, "fila-2-columna-4").setInteractive().setRotation(Math.random(rotaciones));
    this.pz17 = this.add.image(1070, 360, "fila-2-columna-5").setInteractive().setRotation(Math.random(rotaciones));
    this.pz15 = this.add.image(1200, 400, "fila-2-columna-6").setInteractive().setRotation(Math.random(rotaciones));


    this.pz6 = this.add.image(1000, 100, "fila-3-columna-6").setInteractive().setRotation(Math.random(rotaciones));
    this.pz8 = this.add.image(150, 360, "fila-3-columna-5").setInteractive().setRotation(Math.random(rotaciones));
    this.pz9 = this.add.image(170, 590, "fila-3-columna-3").setInteractive().setRotation(Math.random(rotaciones));
    this.pz11 = this.add.image(450, 80, "fila-3-columna-2").setInteractive().setRotation(Math.random(rotaciones));
    this.pz14 = this.add.image(500, 550, "fila-3-columna-1").setInteractive().setRotation(Math.random(rotaciones));
    this.pz18 = this.add.image(1200, 640, "fila-3-columna-4").setInteractive().setRotation(Math.random(rotaciones));

    

    this.input.setDraggable(this.pz1);
    this.input.setDraggable(this.pz2);
    this.input.setDraggable(this.pz3);
    this.input.setDraggable(this.pz4);
    this.input.setDraggable(this.pz5);
    this.input.setDraggable(this.pz6);
    this.input.setDraggable(this.pz7);
    this.input.setDraggable(this.pz8);
    this.input.setDraggable(this.pz9);
    this.input.setDraggable(this.pz10);
    this.input.setDraggable(this.pz11);
    this.input.setDraggable(this.pz12);
    this.input.setDraggable(this.pz13);
    this.input.setDraggable(this.pz14);
    this.input.setDraggable(this.pz15);
    this.input.setDraggable(this.pz16);
    this.input.setDraggable(this.pz17);
    this.input.setDraggable(this.pz18);


    /**Configuración de zonas dropeables */
    /**FILA 1 */
    this.drop1 = this.add.image(396, 225, 'drop').setDepth(-1).setInteractive();
    this.drop2 = this.add.image(496, 225, 'drop').setDepth(-1).setInteractive();
    this.drop3 = this.add.image(596, 225, 'drop').setDepth(-1).setInteractive();
    this.drop4 = this.add.image(696, 225, 'drop').setDepth(-1).setInteractive();
    this.drop5 = this.add.image(796, 225, 'drop').setDepth(-1).setInteractive();
    this.drop6 = this.add.image(896, 225, 'drop').setDepth(-1).setInteractive();

    this.drop1.input.dropZone = true;
    this.drop2.input.dropZone = true;
    this.drop3.input.dropZone = true;
    this.drop4.input.dropZone = true;
    this.drop5.input.dropZone = true;
    this.drop6.input.dropZone = true;

    /**FILA 2 */
    this.drop7 = this.add.image(396, 322, 'drop').setDepth(-1).setInteractive();
    this.drop8 = this.add.image(496, 322, 'drop').setDepth(-1).setInteractive();
    this.drop9 = this.add.image(596, 322, 'drop').setDepth(-1).setInteractive();
    this.drop10 = this.add.image(696, 322, 'drop').setDepth(-1).setInteractive();
    this.drop11 = this.add.image(796, 322, 'drop').setDepth(-1).setInteractive();
    this.drop12 = this.add.image(896, 322, 'drop').setDepth(-1).setInteractive();

    this.drop7.input.dropZone = true;
    this.drop8.input.dropZone = true;
    this.drop9.input.dropZone = true;
    this.drop10.input.dropZone = true;
    this.drop11.input.dropZone = true;
    this.drop12.input.dropZone = true;

    /**FILA 3 */
    this.drop13 = this.add.image(396, 420, 'drop').setDepth(-1).setInteractive();
    this.drop14 = this.add.image(496, 420, 'drop').setDepth(-1).setInteractive();
    this.drop15 = this.add.image(596, 420, 'drop').setDepth(-1).setInteractive();
    this.drop16 = this.add.image(696, 420, 'drop').setDepth(-1).setInteractive();
    this.drop17 = this.add.image(796, 420, 'drop').setDepth(-1).setInteractive();
    this.drop18 = this.add.image(896, 420, 'drop').setDepth(-1).setInteractive();


    this.drop13.input.dropZone = true;
    this.drop14.input.dropZone = true;
    this.drop15.input.dropZone = true;
    this.drop16.input.dropZone = true;
    this.drop17.input.dropZone = true;
    this.drop18.input.dropZone = true;

    const eventos = Phaser.Input.Events;
    var puntaje = 0; //Variable para acumular puntos y poder activar win

    /*Iniciar juego, boton iluminado*/
    this.input.on(eventos.GAMEOBJECT_OVER, (pointer, gameObject) => {
      gameObject.setTint(0x969696);
      // if (gameObject != this.menu && gameObject != this.win) {
      //   gameObject.setTint(0x969696);   //Da el efecto de sombreado sobre la carta
      // }
      if (this.pz1.x == this.drop1.x && this.pz1.y == this.drop1.y &&
        this.pz13.x == this.drop2.x && this.pz13.y == this.drop2.y &&
        this.pz16.x == this.drop3.x && this.pz16.y == this.drop3.y &&
        this.pz12.x == this.drop4.x && this.pz12.y == this.drop4.y &&
        this.pz7.x == this.drop5.x && this.pz7.y == this.drop5.y &&
        this.pz3.x == this.drop6.x && this.pz3.y == this.drop6.y &&

        this.pz2.x == this.drop7.x && this.pz2.y == this.drop7.y &&
        this.pz4.x == this.drop8.x && this.pz4.y == this.drop8.y &&
        this.pz5.x == this.drop9.x && this.pz5.y == this.drop9.y &&
        this.pz10.x == this.drop10.x && this.pz10.y == this.drop10.y &&
        this.pz17.x == this.drop11.x && this.pz17.y == this.drop11.y &&
        this.pz15.x == this.drop12.x && this.pz15.y == this.drop12.y &&


        this.pz14.x == this.drop13.x && this.pz14.y == this.drop13.y &&
        this.pz11.x == this.drop14.x && this.pz11.y == this.drop14.y &&
        this.pz9.x == this.drop15.x && this.pz9.y == this.drop15.y &&
        this.pz18.x == this.drop16.x && this.pz18.y == this.drop16.y &&
        this.pz8.x == this.drop17.x && this.pz8.y == this.drop17.y &&
        this.pz6.x == this.drop18.x && this.pz6.y == this.drop18.y) {
        puntaje = 18;
        console.log('LISTO JUEGO GANADO');
      }


      //controla el puntaje
      if (puntaje == 16) {
        this.scene.restart();   //Reinicio de partida
      } else if ( puntaje == 18){
        this.scene.start('WinMFinal');
      }
    });

      /*Quitando tinte si cursor fuera*/
      this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        if (gameObject != this.win) {
          gameObject.clearTint();
        }
      });
  
    
    
     /*Quitar pantalla de menu e inicia juego*/
     this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
      // if (gameObject != this.menu) {
      //   if (gameObject == this.boton) {
      //     this.boton.removeInteractive();
      //     this.boton.setVisible(false);
      //     this.menu.removeInteractive();
      //     this.menu.setVisible(false);
      //     this.musica.play();
      //   }

        /**Efecto de zoom a imagen cuando se seleccione el objeto*/
        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
          obj.setRotation(0);
        });

        /**Arrastre de objeto con cursor */
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
          obj.x = dragX;
          obj.y = dragY;
          console.log(obj.x, obj.y);
        });

        /**Reestablecimiento de tamaño de objeto cuando se deja de arrastar */
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
          obj.setRotation(Math.random(rotaciones));
        });

        /**Arrastre de un game-object sobre una zona “dropeable” */
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
          if (obj == this.pz1 && obj.x == this.drop1.x && obj.y == this.drop1.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz1, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz13 && obj.x == this.drop2.x && obj.y == this.drop2.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz13, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz16 && obj.x == this.drop3.x && obj.y == this.drop3.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz16, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz12 && obj.x == this.drop4.x && obj.y == this.drop4.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz12, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz7 && obj.x == this.drop5.x && obj.y == this.drop5.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz7, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz3 && obj.x == this.drop6.x && obj.y == this.drop6.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz3, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz2 && obj.x == this.drop7.x && obj.y == this.drop7.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz2, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz4 && obj.x == this.drop8.x && obj.y == this.drop8.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz4, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz5 && obj.x == this.drop9.x && obj.y == this.drop9.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz5, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz10 && obj.x == this.drop10.x && obj.y == this.drop10.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz10, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz17 && obj.x == this.drop11.x && obj.y == this.drop11.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz17, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz15 && obj.x == this.drop12.x && obj.y == this.drop12.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz15, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz14 && obj.x == this.drop13.x && obj.y == this.drop13.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz14, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz11 && obj.x == this.drop14.x && obj.y == this.drop14.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz11, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz9 && obj.x == this.drop15.x && obj.y == this.drop15.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz9, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz18 && obj.x == this.drop16.x && obj.y == this.drop16.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz18, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz8 && obj.x == this.drop17.x && obj.y == this.drop17.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz8, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          else if (obj == this.pz6 && obj.x == this.drop18.x && obj.y == this.drop18.y) {
            obj.setRotation(0).setDepth(-1);
            this.input.setDraggable(this.pz6, false);

            /*LA pieza no se vuelve a sombrear una vez puesta*/
            this.input.on(eventos.GAMEOBJECT_OVER, () => {
              gameObject.clearTint();   //Quitar tinte
            });
          }
          
          else {
            obj.setRotation(Math.random(rotaciones));
            obj.x = obj.input.dragStartX;
            obj.y = obj.input.dragStartY;
          }
        });

        /**Eventos de zona dropeable */
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
          dropzone.setTint(0xff0000);

        });

        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
          dropzone.clearTint();
        });

        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
          obj.x = dropzone.x;
          obj.y = dropzone.y;

          dropzone.clearTint();
        });


        // });
      //}
    });//FIN
  }//Create FIN

  update(time, delta) {
  }
}

export default Mision_Final;

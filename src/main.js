import Bootloader from "./scenes/Bootloader.js"
import Logros from "./scenes/Logros.js"
import LevelOne from "./scenes/LevelOne.js"
import LevelTwo from "./scenes/LevelTwo.js"
import LevelThree from "./scenes/LevelThree.js"
import Personaje from "./scenes/Personaje.js"
import Principal from "./scenes/Principal.js"
import InicioM2_N1 from "./M2_N1/scenes/InicioM2_N1.js";
import Mision2_N1 from "./M2_N1/scenes/Mision2_N1.js"
import InicioM1_N1 from "./M1_N1/scenes/InicioM1_N1.js"
import Mision1_N1 from "./M1_N1/scenes/Mision1_N1.js"
import WinM1L1 from "./M1_N1/scenes/WinM1L1.js"
import WinM2L1 from "./M2_N1/scenes/WinM2L1.js"
import LostM2L1 from "./M2_N1/scenes/LostM2L1.js"
import InicioM1_N2 from "./M1_N2/scenes/InicioM1_N2.js"
import Mision1_N2 from "./M1_N2/scenes/Mision1_N2.js"
import WinM1L2 from "./M1_N2/scenes/WinM1L2.js"
import LostM1L2 from "./M1_N2/scenes/LostM1L2.js"
import InicioM2_N2 from "./M2_N2/scenes/InicioM2_N2.js"
import Mision2_N2 from "./M2_N2/scenes/Mision2_N2.js"
import WinM2L2 from "./M2_N2/scenes/WinM2L2.js"
import LostM2L2 from "./M2_N2/scenes/LostM2L2.js"
import Inicio_Final from "./M_Final/scenes/Inicio_Final.js"
import Mision_Final from "./M_Final/scenes/Mision_Final.js"
import WinMFinal from "./M_Final/scenes/WinMFinal.js"
import UI from "./scenes/UI.js"

const config = {
    title: "Curso Phaser",		    //Nombre del juego (opcional)
    url: "http://google.es",	    //Dirección de la página del juego (opcional)
    version: "0.0.1",		        //Versión alfanumérica (opcional)
    type: Phaser.AUTO,		        //Tipo de renderizado (WEBGL, CANVAS, AUTO)
                                    // AUTO: busca primero WEBGL y si no está disponible eligirá CANVAS
    width: 1280,			            //Ancho de pantalla del juego
    height: 720, 			        //Alto de pantalla del juego
    parent: "contenedor",		    //Nombre del id del elemento <div> en el index.html
                                    // se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: false,		            //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", 	//Color de fondo del canvas ()
    scene: [Bootloader, Principal, UI, Logros, LevelOne, LevelTwo, LevelThree, Personaje, 
            InicioM1_N1, Mision1_N1, WinM1L1,
            InicioM2_N1, Mision2_N1, WinM2L1, LostM2L1,
            InicioM1_N2, Mision1_N2, WinM1L2, LostM1L2,
            InicioM2_N2, Mision2_N2, WinM2L2, LostM2L2,
            Inicio_Final, Mision_Final, WinMFinal],    //Aquí irá la lista de scenas del juego
    banner:{
        hidePhaser: true,
        text: "#fff00f",
        background: [
                "#16a085",
                "#2ecc71",
                "#e74c3c", 
                "#000000"]
    },
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
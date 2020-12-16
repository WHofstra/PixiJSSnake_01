//import * as PIXI from 'pixi.js';
import { Game } from "./ts/Game"

//Creates a Renderer Using WebGL
//const app = new PIXI.Application({ width: 512, height: 478, backgroundColor: 0x000000 });

//Creates a Canvas
//document.body.appendChild(app.view);

//Define Game
//This Class Serves as a Façade
const game = new Game();

//Input
game.KeyInput("S");
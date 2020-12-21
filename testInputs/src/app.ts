//import * as PIXI from 'pixi.js';
import { Game } from "./ts/Scene/Game";

//Creates a Renderer Using WebGL
//const app = new PIXI.Application({ width: 512, height: 478, backgroundColor: 0x000000 });

//Creates a Canvas
//document.body.appendChild(app.view);

//Define Game
const game = Game.GetInstance();

//Input
game.KeyInput("S");
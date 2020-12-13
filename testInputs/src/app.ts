import * as PIXI from 'pixi.js';
import { Player } from './ts/Player';

//Creates a Renderer Using WebGL
const app = new PIXI.Application({ width: 512, height: 478 });

//Creates a Canvas
document.body.appendChild(app.view);

//Define Player
const player = new Player();

//Perform Player Actions
player.Move();
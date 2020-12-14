//import * as PIXI from 'pixi.js';
import { PlayerMovement } from './ts/PlayerMovement';

//Creates a Renderer Using WebGL
//const app = new PIXI.Application({ width: 512, height: 478 });

//Creates a Canvas
//document.body.appendChild(app.view);

//Define Player
const player = new PlayerMovement();

//Perform Player Actions
player.Move();
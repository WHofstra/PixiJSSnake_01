import * as PIXI from 'pixi.js';
import { Controls } from './ts/Controls';
import { PlayerMovement } from './ts/PlayerMovement';

//Creates a Renderer Using WebGL
const app = new PIXI.Application({ width: 512, height: 478, backgroundColor: 0xFFFFFF });

//Creates a Canvas
document.body.appendChild(app.view);

//Define Controls
const controls = new Controls();

//Define Player
const player = new PlayerMovement();

//Perform Player Actions
controls.Register(player);
controls.KeyInput("A");
controls.KeyInput("S");
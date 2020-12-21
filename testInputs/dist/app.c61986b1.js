// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ts/GameStates/MenuState.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MenuState = /*#__PURE__*/function () {
  function MenuState(aMachine) {
    _classCallCheck(this, MenuState);

    this.machine = aMachine;
  }

  _createClass(MenuState, [{
    key: "LoadMenu",
    value: function LoadMenu() {
      console.log("You are already in the main menu.");
    }
  }, {
    key: "LoadGame",
    value: function LoadGame() {
      console.log("Starting game.");
      this.machine.CurrentState = this.machine.State[1];
    }
  }, {
    key: "Die",
    value: function Die() {
      console.log("You first need to start the game.");
    }
  }, {
    key: "ShowHighScores",
    value: function ShowHighScores() {
      console.log("This is the highscore.");
      this.machine.CurrentState = this.machine.State[3];
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance(aMachine) {
      if (!this.menu) {
        this.menu = new MenuState(aMachine);
      }

      return this.menu;
    }
  }]);

  return MenuState;
}();

exports.MenuState = MenuState;
},{}],"ts/GameStates/InGameState.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InGameState = /*#__PURE__*/function () {
  function InGameState(aMachine) {
    _classCallCheck(this, InGameState);

    this.machine = aMachine;
  }

  _createClass(InGameState, [{
    key: "LoadMenu",
    value: function LoadMenu() {
      console.log("Going back to main menu.");
      this.machine.CurrentState = this.machine.State[0];
    }
  }, {
    key: "LoadGame",
    value: function LoadGame() {
      console.log("You are currently in-game.");
    }
  }, {
    key: "Die",
    value: function Die() {
      console.log("You just died.");
      this.machine.CurrentState = this.machine.State[2];
    }
  }, {
    key: "ShowHighScores",
    value: function ShowHighScores() {
      console.log("You cannot watch the highscore just yet.");
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance(aMachine) {
      if (!this.inGame) {
        this.inGame = new InGameState(aMachine);
      }

      return this.inGame;
    }
  }]);

  return InGameState;
}();

exports.InGameState = InGameState;
},{}],"ts/GameStates/GameOverState.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameOverState = /*#__PURE__*/function () {
  function GameOverState(aMachine) {
    _classCallCheck(this, GameOverState);

    this.machine = aMachine;
  }

  _createClass(GameOverState, [{
    key: "LoadMenu",
    value: function LoadMenu() {
      console.log("Going back to main menu.");
      this.machine.CurrentState = this.machine.State[0];
    }
  }, {
    key: "LoadGame",
    value: function LoadGame() {
      console.log("Replay.");
      this.machine.CurrentState = this.machine.State[1];
    }
  }, {
    key: "Die",
    value: function Die() {
      console.log("You are already dead.");
    }
  }, {
    key: "ShowHighScores",
    value: function ShowHighScores() {
      console.log("Going to the highscore.");
      this.machine.CurrentState = this.machine.State[3];
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance(aMachine) {
      if (!this.gameOver) {
        this.gameOver = new GameOverState(aMachine);
      }

      return this.gameOver;
    }
  }]);

  return GameOverState;
}();

exports.GameOverState = GameOverState;
},{}],"ts/GameStates/HighscoreState.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HighscoreState = /*#__PURE__*/function () {
  function HighscoreState(aMachine) {
    _classCallCheck(this, HighscoreState);

    this.machine = aMachine;
  }

  _createClass(HighscoreState, [{
    key: "LoadMenu",
    value: function LoadMenu() {
      console.log("Going back to main menu.");
      this.machine.CurrentState = this.machine.State[0];
    }
  }, {
    key: "LoadGame",
    value: function LoadGame() {
      console.log("Replay.");
      this.machine.CurrentState = this.machine.State[1];
    }
  }, {
    key: "Die",
    value: function Die() {
      console.log("You need to replay first.");
    }
  }, {
    key: "ShowHighScores",
    value: function ShowHighScores() {
      console.log("You are currently viewing the highscore.");
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance(aMachine) {
      if (!this.highscore) {
        this.highscore = new HighscoreState(aMachine);
      }

      return this.highscore;
    }
  }]);

  return HighscoreState;
}();

exports.HighscoreState = HighscoreState;
},{}],"ts/GameStates/StateMachine.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MenuState_1 = require("./MenuState");

var InGameState_1 = require("./InGameState");

var GameOverState_1 = require("./GameOverState");

var HighscoreState_1 = require("./HighscoreState");

var StateMachine = /*#__PURE__*/function () {
  function StateMachine() {
    _classCallCheck(this, StateMachine);

    this.state = [];
    this.state.push(MenuState_1.MenuState.GetInstance(this));
    this.state.push(InGameState_1.InGameState.GetInstance(this));
    this.state.push(GameOverState_1.GameOverState.GetInstance(this));
    this.state.push(HighscoreState_1.HighscoreState.GetInstance(this));
    this.currentState = this.state[0];
  }

  _createClass(StateMachine, [{
    key: "CurrentState",
    set: function set(aState) {
      this.currentState = aState;
    },
    get: function get() {
      return this.currentState;
    }
  }, {
    key: "State",
    get: function get() {
      return this.state;
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance() {
      if (!this.stateMachine) {
        this.stateMachine = new StateMachine();
      }

      return this.stateMachine;
    }
  }]);

  return StateMachine;
}();

exports.StateMachine = StateMachine;
},{"./MenuState":"ts/GameStates/MenuState.ts","./InGameState":"ts/GameStates/InGameState.ts","./GameOverState":"ts/GameStates/GameOverState.ts","./HighscoreState":"ts/GameStates/HighscoreState.ts"}],"ts/ObserverCheck/Controls.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Controls = /*#__PURE__*/function () {
  function Controls() {
    _classCallCheck(this, Controls);

    this.observerList = [];
    this.input = "";
  }

  _createClass(Controls, [{
    key: "Register",
    value: function Register(anObserver) {
      this.observerList.push(anObserver);
    }
  }, {
    key: "Unregister",
    value: function Unregister(anObserver) {
      var index;
      index = this.observerList.indexOf(anObserver);
      this.observerList.splice(index, 1);
    }
  }, {
    key: "Notify",
    value: function Notify() {
      this.observerList.forEach(function (element) {
        element.Update();
      });
    }
  }, {
    key: "KeyInput",
    value: function KeyInput(anInput) {
      this.input = anInput;
      console.log(this.input + " is pressed.");
      this.Notify();
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance() {
      if (!this.controls) {
        this.controls = new Controls();
      }

      return this.controls;
    }
  }]);

  return Controls;
}();

exports.Controls = Controls;
},{}],"ts/VariableLists/Vector.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector = /*#__PURE__*/function () {
  function Vector(xValue, yValue) {
    var zValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vector);

    this.x = xValue;
    this.y = yValue;
    this.z = zValue;
  }

  _createClass(Vector, [{
    key: "Set",
    value: function Set(X, Y) {
      var Z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.x = X;
      this.y = Y;
      this.z = Z;
    }
  }, {
    key: "X",
    get: function get() {
      return this.x;
    },
    set: function set(value) {
      this.x = value;
    }
  }, {
    key: "Y",
    get: function get() {
      return this.y;
    },
    set: function set(value) {
      this.y = value;
    }
  }, {
    key: "Z",
    get: function get() {
      return this.z;
    },
    set: function set(value) {
      this.z = value;
    }
  }]);

  return Vector;
}();

exports.Vector = Vector;
},{}],"ts/ObjectBaseClasses/GameObject.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector_1 = require("../VariableLists/Vector");

exports.Vector = Vector_1.Vector;

var GameObject = /*#__PURE__*/function () {
  function GameObject(aPosition) {
    _classCallCheck(this, GameObject);

    this.position = aPosition;
  }

  _createClass(GameObject, [{
    key: "Position",
    get: function get() {
      return this.position;
    }
  }]);

  return GameObject;
}();

exports.GameObject = GameObject;
},{"../VariableLists/Vector":"ts/VariableLists/Vector.ts"}],"ts/Player/PlayerMovement.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("../ObjectBaseClasses/GameObject");

exports.Vector = GameObject_1.Vector;
var SPEED = 30.0;

var PlayerMovement = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(PlayerMovement, _GameObject_1$GameObj);

  var _super = _createSuper(PlayerMovement);

  function PlayerMovement(aPosition, controls) {
    var _this;

    _classCallCheck(this, PlayerMovement);

    _this = _super.call(this, aPosition);
    _this.velocity = new GameObject_1.Vector(SPEED, 0);
    controls.Register(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlayerMovement, [{
    key: "Update",
    value: function Update() {}
  }, {
    key: "Velocity",
    get: function get() {
      return this.velocity;
    }
  }]);

  return PlayerMovement;
}(GameObject_1.GameObject);

exports.PlayerMovement = PlayerMovement;
},{"../ObjectBaseClasses/GameObject":"ts/ObjectBaseClasses/GameObject.ts"}],"ts/ObjectBaseClasses/CollisionObject.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("./GameObject");

exports.Vector = GameObject_1.Vector;

var CollisionObject = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(CollisionObject, _GameObject_1$GameObj);

  var _super = _createSuper(CollisionObject);

  function CollisionObject() {
    _classCallCheck(this, CollisionObject);

    return _super.apply(this, arguments);
  }

  return CollisionObject;
}(GameObject_1.GameObject);

exports.CollisionObject = CollisionObject;
},{"./GameObject":"ts/ObjectBaseClasses/GameObject.ts"}],"ts/Player/Player.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Player = /*#__PURE__*/function () {
  function Player(movement) {
    _classCallCheck(this, Player);

    this.children = [];
    this.movement = movement;
  }

  _createClass(Player, [{
    key: "Register",
    value: function Register(aChild) {
      this.children.push(aChild);
    }
  }, {
    key: "Unregister",
    value: function Unregister(aChild) {
      var index;
      index = this.children.indexOf(aChild);
      this.children.splice(index, 1);
    }
  }, {
    key: "Notify",
    value: function Notify() {
      this.children.forEach(function (element) {
        element.Update();
      });
    }
  }, {
    key: "Movement",
    get: function get() {
      return this.movement;
    }
  }]);

  return Player;
}();

exports.Player = Player;
},{}],"ts/Player/PlayerSegment.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CollisionObject_1 = require("../ObjectBaseClasses/CollisionObject");

exports.Vector = CollisionObject_1.Vector;

var Player_1 = require("./Player");

exports.Player = Player_1.Player;

var PlayerSegment = /*#__PURE__*/function (_CollisionObject_1$Co) {
  _inherits(PlayerSegment, _CollisionObject_1$Co);

  var _super = _createSuper(PlayerSegment);

  function PlayerSegment(aPosition, parent) {
    var _this;

    _classCallCheck(this, PlayerSegment);

    _this = _super.call(this, aPosition);
    parent.Register(_assertThisInitialized(_this));
    _this.velocity = parent.Movement.Velocity;
    return _this;
  }

  _createClass(PlayerSegment, [{
    key: "Flush",
    value: function Flush() {
      this.position.Set(0, 0);
      this.velocity.Set(0, 0);
    }
  }, {
    key: "Update",
    value: function Update() {}
  }]);

  return PlayerSegment;
}(CollisionObject_1.CollisionObject);

exports.PlayerSegment = PlayerSegment;
},{"../ObjectBaseClasses/CollisionObject":"ts/ObjectBaseClasses/CollisionObject.ts","./Player":"ts/Player/Player.ts"}],"ts/CreationPatterns/SegmentFactory.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PlayerSegment_1 = require("../Player/PlayerSegment");

exports.Player = PlayerSegment_1.Player;

var SegmentFactory = /*#__PURE__*/function () {
  function SegmentFactory(parent) {
    _classCallCheck(this, SegmentFactory);

    this.parent = parent;
  }

  _createClass(SegmentFactory, [{
    key: "CreateObject",
    value: function CreateObject() {
      return new PlayerSegment_1.PlayerSegment(this.parent.Movement.Position, this.parent);
    }
  }]);

  return SegmentFactory;
}();

exports.SegmentFactory = SegmentFactory;
},{"../Player/PlayerSegment":"ts/Player/PlayerSegment.ts"}],"ts/Pool/ObjectPool.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PlayerSegment_1 = require("../Player/PlayerSegment");

exports.Player = PlayerSegment_1.Player;

var ObjectPool = /*#__PURE__*/function () {
  function ObjectPool() {
    _classCallCheck(this, ObjectPool);
  }

  _createClass(ObjectPool, null, [{
    key: "Add",
    value: function Add(anObject) {
      this.available.push(anObject);
    }
  }, {
    key: "GetObject",
    value: function GetObject(parent) {
      var poolObj;

      if (this.available.length > 0) {
        poolObj = this.available[0];
        this.inUse.push(poolObj);
        this.available.shift();
      } else {
        poolObj = new PlayerSegment_1.PlayerSegment(parent.Movement.Velocity, parent);
        this.inUse.push(poolObj);
      }

      return poolObj;
    }
  }, {
    key: "ReleaseObject",
    value: function ReleaseObject(anObject) {
      var index;
      this.CleanUp(anObject);
      this.available.push(anObject);
      index = this.inUse.indexOf(anObject);

      if (index != null) {
        this.inUse.splice(index, 1);
      }
    }
  }, {
    key: "CleanUp",
    value: function CleanUp(anObject) {
      if (anObject instanceof PlayerSegment_1.PlayerSegment) {
        anObject.Flush();
      }
    }
  }]);

  return ObjectPool;
}();

ObjectPool.available = [];
ObjectPool.inUse = [];
exports.ObjectPool = ObjectPool;
},{"../Player/PlayerSegment":"ts/Player/PlayerSegment.ts"}],"ts/Items/Item.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Item = /*#__PURE__*/function () {
  function Item() {
    _classCallCheck(this, Item);
  }

  _createClass(Item, [{
    key: "Flush",
    value: function Flush() {}
  }]);

  return Item;
}();

exports.Item = Item;
},{}],"ts/Items/Edible.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Item_1 = require("./Item");

var Edible = /*#__PURE__*/function (_Item_1$Item) {
  _inherits(Edible, _Item_1$Item);

  var _super = _createSuper(Edible);

  function Edible() {
    _classCallCheck(this, Edible);

    return _super.apply(this, arguments);
  }

  return Edible;
}(Item_1.Item);

exports.Edible = Edible;
},{"./Item":"ts/Items/Item.ts"}],"ts/CreationPatterns/EdibleFactory.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Edible_1 = require("../Items/Edible");

exports.Edible = Edible_1.Edible;

var EdibleFactory = /*#__PURE__*/function () {
  function EdibleFactory() {
    _classCallCheck(this, EdibleFactory);
  }

  _createClass(EdibleFactory, [{
    key: "CreateObject",
    value: function CreateObject() {
      return new Edible_1.Edible();
    }
  }]);

  return EdibleFactory;
}();

exports.EdibleFactory = EdibleFactory;
},{"../Items/Edible":"ts/Items/Edible.ts"}],"ts/Scene/Game.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var StateMachine_1 = require("../GameStates/StateMachine");

var Controls_1 = require("../ObserverCheck/Controls");

var PlayerMovement_1 = require("../Player/PlayerMovement");

var SegmentFactory_1 = require("../CreationPatterns/SegmentFactory");

var ObjectPool_1 = require("../Pool/ObjectPool");

var EdibleFactory_1 = require("../CreationPatterns/EdibleFactory");

var POOL_SIZE = 50;

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.stateMachine = StateMachine_1.StateMachine.GetInstance();
    this.controls = Controls_1.Controls.GetInstance();
    this.playerMovement = new PlayerMovement_1.PlayerMovement(new PlayerMovement_1.Vector(40, 80), this.controls);
    this.player = new SegmentFactory_1.Player(this.playerMovement);
    console.log(this.player.Movement);
    this.playerFactory = new SegmentFactory_1.SegmentFactory(this.player);
    this.FillPool(POOL_SIZE);
    this.edibleFactory = new EdibleFactory_1.EdibleFactory();
    this.item = this.edibleFactory.CreateObject();
    console.log(this.item);
    this.stateMachine.CurrentState.LoadGame();
  }

  _createClass(Game, [{
    key: "FillPool",
    value: function FillPool(amount) {
      for (var i = 0; i < amount; i++) {
        ObjectPool_1.ObjectPool.Add(this.playerFactory.CreateObject());
      }
    }
  }, {
    key: "KeyInput",
    value: function KeyInput(anInput) {
      this.controls.KeyInput(anInput);
    }
  }], [{
    key: "GetInstance",
    value: function GetInstance() {
      if (!this.game) {
        this.game = new Game();
      }

      return this.game;
    }
  }]);

  return Game;
}();

exports.Game = Game;
},{"../GameStates/StateMachine":"ts/GameStates/StateMachine.ts","../ObserverCheck/Controls":"ts/ObserverCheck/Controls.ts","../Player/PlayerMovement":"ts/Player/PlayerMovement.ts","../CreationPatterns/SegmentFactory":"ts/CreationPatterns/SegmentFactory.ts","../Pool/ObjectPool":"ts/Pool/ObjectPool.ts","../CreationPatterns/EdibleFactory":"ts/CreationPatterns/EdibleFactory.ts"}],"app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Game_1 = require("./ts/Scene/Game");

var game = Game_1.Game.GetInstance();
game.KeyInput("S");
},{"./ts/Scene/Game":"ts/Scene/Game.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52360" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map
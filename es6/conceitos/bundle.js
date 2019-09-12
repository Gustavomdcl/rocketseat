"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//CLASS ===
if (false) {
  var List =
  /*#__PURE__*/
  function () {
    function List() {
      _classCallCheck(this, List);

      this.data = [];
    }

    _createClass(List, [{
      key: "add",
      value: function add(data) {
        this.data.push(data);
        console.log(this.data);
      }
    }]);

    return List;
  }();

  var TodoList =
  /*#__PURE__*/
  function (_List) {
    _inherits(TodoList, _List);

    function TodoList() {
      var _this;

      _classCallCheck(this, TodoList);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
      _this.usuario = 'Gustavo';
      return _this;
    }

    _createClass(TodoList, [{
      key: "mostraUsuario",
      value: function mostraUsuario() {
        console.log(this.usuario);
      }
    }]);

    return TodoList;
  }(List);

  var MinhaLista = new TodoList();
  var button = document.createElement("button");
  var textElement = document.createTextNode("Adicionar");
  button.appendChild(textElement);
  var containerElement = document.querySelector("body");
  containerElement.appendChild(button);
  button.addEventListener('click', function () {
    MinhaLista.add('Novo todo');
  });
  MinhaLista.mostraUsuario();

  var Matematica =
  /*#__PURE__*/
  function () {
    function Matematica() {
      _classCallCheck(this, Matematica);
    }

    _createClass(Matematica, null, [{
      key: "soma",
      value: function soma(a, b) {
        return a + b;
      }
    }]);

    return Matematica;
  }();

  console.log(Matematica.soma(1, 2));
} //ARRAY


if (false) {
  var arr = [1, 3, 4, 5, 8, 9];
  var arrMap = arr.map(function (item, index) {
    return item * 2 + ' ' + index;
  });
  console.log(arrMap);
  var arrReduce = arr.reduce(function (total, next) {
    return total + ' + ' + next;
  });
  console.log(arrReduce);
  var arrFilter = arr.filter(function (item) {
    return item % 2 === 0; //Verifica se o número é par, divisível por 2 o resto é 0
  });
  console.log(arrFilter);
  var arrFind = arr.find(function (item) {
    return item === 4;
  });
  console.log(arrFind);
} //OBJECT


if (false) {
  var usuario = {
    nome: 'Gustavo',
    idade: 27,
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP'
    }
  };
  var _nome = usuario.nome,
      idade = usuario.idade,
      cidade = usuario.endereco.cidade;
  console.log(_nome, idade, cidade);
} //REST


if (false) {
  var soma = function soma(a, b) {
    return a + b;
  };

  var somaREST = function somaREST(a, b) {
    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    console.log(params);
    return params.reduce(function (total, next) {
      return total + next;
    });
  };

  var _usuario = {
    nome: 'Gustavo',
    idade: 27,
    empresa: 'Webnauta'
  };

  var nome = _usuario.nome,
      rest = _objectWithoutProperties(_usuario, ["nome"]);

  console.log(nome, rest);
  var _arr = [1, 2, 3, 4];

  var a = _arr[0],
      b = _arr[1],
      c = _arr.slice(2);

  console.log(a, b, c);
  console.log(soma(1, 3));
  console.log(somaREST(1, 3, 4, 5, 6));
} //SPREAD


if (false) {
  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var arrSPREAD = [].concat(arr1, arr2);
  console.log(arrSPREAD);
  var user1 = {
    nome: 'Gustavo',
    idade: 27,
    empresa: 'Webnauta'
  };

  var user2 = _objectSpread({}, user1, {
    nome: 'Isabella'
  });

  console.log(user1, user2);
}

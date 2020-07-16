"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var CreateProject_1 = __importDefault(require("./services/CreateProject"));
// https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36
function helloWorld(request, response) {
    var user = CreateUser_1.default('Gustavo', 'gustavomdcl@gmail.com.br', '123456');
    var project = CreateProject_1.default({
        name: 'Gustavo',
        email: 'gustavomdcl@gmail.com.br',
        password: '123456',
        techs: [
            'ReactJS',
            'TypeScript',
            { title: 'Javascript', experience: 100 },
        ],
        contact: [
            'dungus',
        ],
    });
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;

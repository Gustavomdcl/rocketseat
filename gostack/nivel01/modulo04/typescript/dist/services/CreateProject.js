"use strict";
/**
 * name?: string // `opcional`
 * name: string // `obrigatório`
 *
 * types: string, number, boolean, object, Array
 * Array<formato> // `quando tem vários valores`
 * string[] // `quando tem um valor`
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createProject(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, techs = _a.techs, contact = _a.contact;
    var project = {
        name: name,
        email: email,
        password: password,
        techs: techs,
        contact: contact,
    };
    return project;
}
exports.default = createProject;

"use strict";
/**
 * Para criar: name, email, password
 *
 * types: string, number, boolean, object, Array
 */
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36
function createUser(name, email, password) {
    if (name === void 0) { name = ''; }
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}
exports.default = createUser;

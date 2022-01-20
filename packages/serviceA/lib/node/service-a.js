"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeServerImpl = void 0;
const api_1 = require("@microservice/api");
const rpc_1 = require("@malagu/rpc");
let WelcomeServerImpl = class WelcomeServerImpl {
    say() {
        return Promise.resolve('Service A');
    }
};
WelcomeServerImpl = __decorate([
    (0, rpc_1.Rpc)(api_1.ServiceA)
], WelcomeServerImpl);
exports.WelcomeServerImpl = WelcomeServerImpl;
//# sourceMappingURL=service-a.js.map
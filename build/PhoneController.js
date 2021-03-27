"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneController = void 0;
const tsoa_1 = require("tsoa");
const Phone_1 = require("./Phone");
const PhoneService_1 = require("./PhoneService");
let PhoneController = class PhoneController extends tsoa_1.Controller {
    async getPhones() {
        const phoneService = PhoneService_1.PhoneService.getPhoneService();
        return phoneService.getAllPhones();
    }
    async createPhone(phone) {
        const phoneService = PhoneService_1.PhoneService.getPhoneService();
        phoneService.addPhone(phone);
        return phoneService.getPhone(phone.id);
    }
};
__decorate([
    tsoa_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "getPhones", null);
__decorate([
    tsoa_1.Post("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Phone_1.Phone]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "createPhone", null);
PhoneController = __decorate([
    tsoa_1.Route("/phones")
], PhoneController);
exports.PhoneController = PhoneController;

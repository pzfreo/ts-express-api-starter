"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
class PhoneService {
    constructor() {
        this.phones = null;
        const brick = { id: 1, manufacturer: "Nokia", model: "3310" };
        this.phones = [];
        this.phones[brick.id] = brick;
    }
    static getPhoneService() {
        if (this.me)
            return this.me;
        else {
            this.me = new PhoneService();
            return this.me;
        }
    }
    async getAllPhones() {
        return this.phones.filter((phone) => { return phone != null; });
    }
    async getPhone(id) {
        if (this.phones[id])
            return this.phones[id];
        return null;
    }
    async addPhone(phone) {
        this.phones[phone.id] = phone;
        return;
    }
}
exports.PhoneService = PhoneService;

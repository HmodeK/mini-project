"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDigits = void 0;
class IsDigits {
    constructor(input) {
        this.number = input;
    }
    isInputDigits() {
        return /^\d+$/.test(this.number);
    }
}
exports.IsDigits = IsDigits;

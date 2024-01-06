"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerStringChecker = void 0;
class LowerStringChecker {
    constructor(input) {
        this.string = input;
    }
    isStringLower() {
        return this.string === this.string.toLowerCase();
    }
}
exports.LowerStringChecker = LowerStringChecker;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalindromeChecker = void 0;
class PalindromeChecker {
    constructor(input) {
        this.cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
    isPalindrome() {
        for (let i = 0, j = this.cleanInput.length - 1; i < j; i++, j--) {
            if (this.cleanInput[i] !== this.cleanInput[j]) {
                return false;
            }
        }
        return true;
    }
}
exports.PalindromeChecker = PalindromeChecker;

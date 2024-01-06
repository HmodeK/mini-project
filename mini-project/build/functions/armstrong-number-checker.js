"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmstrongNumber = void 0;
class ArmstrongNumber {
    constructor(input) {
        this.number = input;
    }
    isArmstrongNumber() {
        const numString = this.number;
        const numDigits = numString.length;
        let sum = 0;
        for (let i = 0; i < numDigits; i++) {
            const digit = parseInt(numString[i], 10);
            sum += Math.pow(digit, numDigits);
        }
        return sum === parseInt(this.number);
    }
}
exports.ArmstrongNumber = ArmstrongNumber;

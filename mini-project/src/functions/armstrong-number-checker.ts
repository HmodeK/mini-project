export class ArmstrongNumber{
    private number: string;
    constructor(input: string) {
        this.number = input
    }
    isArmstrongNumber(): boolean {
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
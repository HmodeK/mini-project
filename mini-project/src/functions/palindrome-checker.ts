export class PalindromeChecker {
    private cleanInput: string;
    constructor(input: string) {
        this.cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }
    isPalindrome(): boolean {
        for (let i = 0, j = this.cleanInput.length - 1; i < j; i++, j--) {
            if (this.cleanInput[i] !== this.cleanInput[j]) {
                return false;
            }
        }
        return true;
    }
}

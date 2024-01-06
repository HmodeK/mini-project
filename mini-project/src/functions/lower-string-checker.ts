export class LowerStringChecker{
    private string: string;
    constructor(input: string) {
        this.string = input
    }
    isStringLower(): boolean {
        return this.string === this.string.toLowerCase()
    }
}
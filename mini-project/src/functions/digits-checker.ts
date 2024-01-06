export class IsDigits{
    private number: string;
    constructor(input: string) {
        this.number = input
    }
    isInputDigits(): boolean{
        return /^\d+$/.test(this.number)
    }
}
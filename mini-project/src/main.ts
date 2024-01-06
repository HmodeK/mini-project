import * as readlineSync from 'readline-sync';
import { PalindromeChecker } from './functions/palindrome-checker';
import { LowerStringChecker } from './functions/lower-string-checker';
import { IsDigits } from './functions/digits-checker';
import { ArmstrongNumber } from './functions/armstrong-number-checker';
import { Nationalize } from './functions/nationalize-checker';
function printOptions(){
    console.log("1 - Palindrome")
    console.log("2 - Lower")
    console.log("3 - Digits")
    console.log("4 - Armstrong")
    console.log('5 - Nationalize')
    console.log("6 - Exit")
}
function getOption() {
    const option = readlineSync.question('enter the number of the command: ');
    switch(option){
        case "1":
            const input1 = readlineSync.question('enter the input: ');
            const palindromeChecker = new PalindromeChecker(input1);
            console.log(palindromeChecker.isPalindrome())
            break

        case "2":
            const input2 = readlineSync.question('enter the input: ');
            const lowerStringChecker = new LowerStringChecker(input2);
            console.log(lowerStringChecker.isStringLower())
            break

        case "3":
            const input3 = readlineSync.question('enter the input: ');
            const isDigits = new IsDigits(input3)
            console.log(isDigits.isInputDigits())
            break

        case "4":
            const input4 = readlineSync.question('enter the input: ')
            const armstrongNumber = new ArmstrongNumber(input4)
            console.log(armstrongNumber.isArmstrongNumber())
            break

        case "5":
            const input5 = readlineSync.question('enter the input: ')
            const nationality = new Nationalize(input5)
            nationality.getNationality()
            break

        case "6":
            console.log("Exiting the program.");
            break

        default:
            console.log("you should enter 1 - 6 only.\nTry Again")
            getOption()
    }
}


printOptions()
getOption();

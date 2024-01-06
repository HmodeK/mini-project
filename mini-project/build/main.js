"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const palindrome_checker_1 = require("./functions/palindrome-checker");
const lower_string_checker_1 = require("./functions/lower-string-checker");
const digits_checker_1 = require("./functions/digits-checker");
const armstrong_number_checker_1 = require("./functions/armstrong-number-checker");
const nationalize_checker_1 = require("./functions/nationalize-checker");
function printOptions() {
    console.log("1 - Palindrome");
    console.log("2 - Lower");
    console.log("3 - Digits");
    console.log("4 - Armstrong");
    console.log('5 - Nationalize');
    console.log("6 - Exit");
}
function getOption() {
    const option = readlineSync.question('enter the number of the command: ');
    switch (option) {
        case "1":
            const input1 = readlineSync.question('enter the input: ');
            const palindromeChecker = new palindrome_checker_1.PalindromeChecker(input1);
            console.log(palindromeChecker.isPalindrome());
            break;
        case "2":
            const input2 = readlineSync.question('enter the input: ');
            const lowerStringChecker = new lower_string_checker_1.LowerStringChecker(input2);
            console.log(lowerStringChecker.isStringLower());
            break;
        case "3":
            const input3 = readlineSync.question('enter the input: ');
            const isDigits = new digits_checker_1.IsDigits(input3);
            console.log(isDigits.isInputDigits());
            break;
        case "4":
            const input4 = readlineSync.question('enter the input: ');
            const armstrongNumber = new armstrong_number_checker_1.ArmstrongNumber(input4);
            console.log(armstrongNumber.isArmstrongNumber());
            break;
        case "5":
            const input5 = readlineSync.question('enter the input: ');
            const nationality = new nationalize_checker_1.Nationalize(input5);
            nationality.getNationality();
            break;
        case "6":
            console.log("Exiting the program.");
            break;
        default:
            console.log("you should enter 1 - 6 only.\nTry Again");
            getOption();
    }
}
printOptions();
getOption();

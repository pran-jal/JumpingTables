import { suffle } from "./utils/base.js"



export class Table {
    start_from: number
    end_at: number
    max_multiplier: number
    multiplicant: number | undefined
    multiplier: number | undefined
    options: Array<number>| undefined
    

    constructor(start: number = 2, end: number = 20, max_multiplier: number = 10) {
        this.start_from = Number(start); // starts jumpping from here
        this.end_at = Number(end); // can jump upto here
        this.max_multiplier = Number(max_multiplier); // can multiply upto here
    }


    jump() {
        this.multiplicant = Math.floor(Math.random() * (this.end_at - this.start_from + 1)) + this.start_from;
        this.multiplier = Math.floor(Math.random() * this.max_multiplier) + 1;

        let options : Array<number>= [this.calc_answer()];

        while (options.length != 4) {
            var option = (Math.floor(Math.random() * 3) + this.multiplicant) * (Math.floor(Math.random() * 3) + this.multiplier);
            if (!(options.includes(option))) {
                options.push(option);
            }
        }

        this.options = options;
        suffle(this.options);
        
        return `${this.multiplicant} * ${this.multiplier} is`;
    }


    calc_answer() {
        if (this.multiplicant && this.multiplier)
            return this.multiplicant * this.multiplier;
        throw "Cannot calculate answer. call \"jump\" before calculating answer";
    }


    check_answer(user_answer: number) {
        if (this.calc_answer() === user_answer)
            return true;
        return false;
    }
    
}
export class Table {
    start_from: number
    end_at: number
    max_multiplier: number
    multiplicant: number | undefined
    multiplier: number | undefined

    constructor(start: number = 2, end: number = 20, max_multiplier: number = 10) {
        this.start_from = start; // starts jumpping from here
        this.end_at = end; // can jump upto here
        this.max_multiplier = max_multiplier; // can multiply upto here
    }


    jump() {
        this.multiplicant = Math.floor(Math.random() * this.end_at) + this.start_from;
        this.multiplier = Math.floor(Math.random() * this.max_multiplier) + 1;
    }


    calc_answer() {
        if (this.multiplicant && this.multiplier)
            return this.multiplicant * this.multiplier;
        return "Cannot calculate answer. call \"jump\" before calculating answer"
    }


    check_answer(user_answer: number) {
        if (this.calc_answer() === user_answer)
            return true;
        return false;
    }
}
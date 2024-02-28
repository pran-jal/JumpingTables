export class Table {
    start_from: number
    end_at: number
    max_multiplier: number
    multiplicant: number | undefined
    multiplier: number | undefined
    options: Array<number>| undefined


    constructor(start: number = 2, end: number = 20, max_multiplier: number = 10) {
        this.start_from = start; // starts jumpping from here
        this.end_at = end; // can jump upto here
        this.max_multiplier = max_multiplier; // can multiply upto here
    }


    jump() {
        this.multiplicant = Math.floor(Math.random() * (this.end_at - this.start_from + 1)) + this.start_from;
        this.multiplier = Math.floor(Math.random() * this.max_multiplier) + 1;

        let options : Array<number>= [];
        for(var i=0; i<3; i++) {
            options.push((Math.floor(Math.random() * 7) + this.multiplicant) * (Math.floor(Math.random() * 7) + this.multiplier));
        }

        // options.shift();
        // options.sort(() => Math.random() - 0.5);
        this.options = options;
        this.options.push(this.calc_answer());
        console.log(options);
        
        return `${this.multiplicant} * ${this.multiplier} is`;
    }


    calc_answer() {
        if (this.multiplicant && this.multiplier)
            return this.multiplicant * this.multiplier;
        return "Cannot calculate answer. call \"jump\" before calculating answer";
    }


    check_answer(user_answer: number) {
        if (this.calc_answer() === user_answer)
            return true;
        return false;
    }

    // get_options() {
    //     if (!(this.multiplicant && this.multiplier))
    //         return "Cannot calculate answer. call \"jump\" before getting options";
        
    //     let options = [0,0,0,0];
    //     for(var i=0; i<4; i++) {
    //         options[Math.floor(Math.random() * (4)) + 0] = (Math.floor(Math.random() * 7) + this.multiplicant) * (Math.floor(Math.random() * 7) + this.multiplier) 
    //     }
    //     this.options = options;
    //     return options;
    // }

    
}
function add(...args: number[]): number {
    return args.reduce((sum, curr) => { return sum + curr; });
}


class Unit {
    public size: number;
    constructor(s: number) {
        this.size = s;
    }
}

export { add, Unit };
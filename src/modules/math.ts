function add(...args: number[]): number {
    return args.reduce((sum, curr) => { return sum + curr; });
}
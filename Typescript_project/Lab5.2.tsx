function Lab5() {
    type Operation = (a: number, b: number) => number;

    const add: Operation = (a, b) => a+b;
    const multiply: Operation = (a, b) => a * b;
    
    return (
        <div>
            <h2>Add: {add(5, 3)}</h2>
            <h2>Multiply: {multiply(5, 3)}</h2>    
        </div>
    );
}

export default Lab5;
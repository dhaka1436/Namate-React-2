import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers",() => {
    const result = sum(3,4);

    expect(result).toBe(7); // this line is called as assertion
    // not mandatory to write expect statement
    // then it'll always pass because there is no expectation

})


// first argument gives the description of what are we testing
import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load the Contact Us Component" , () => {

    render(<Contact/>); // will render the compnent to the JS DOM
    
    const heading = screen.getByRole("heading");
    // will find all the headings inside that componenet and will give us here

    // assertion

    expect(heading).toBeInTheDocument();
});

test("Should load the Button inside Contact Us Component" , () => {

    render(<Contact/>); // will render the compnent to the JS DOM
    
    const button = screen.getByRole("button");
    // will find all the headings inside that componenet and will give us here

    // assertion

    expect(button).toBeInTheDocument();
});

test("Should load the Button inside Contact Us Component" , () => {

    render(<Contact/>); // will render the compnent to the JS DOM
    
    const text = screen.getByText("Submit")
    // will find all the headings inside that componenet and will give us here

    // assertion

    expect(text).toBeInTheDocument();
});

test("Should load the Button inside Contact Us Component" , () => {

    render(<Contact/>); // will render the compnent to the JS DOM
    
    const inputName = screen.getByPlaceholderText("Name")
    // will find all the headings inside that componenet and will give us here

    // assertion

    expect(inputName).toBeInTheDocument();
});

// to check whether 2 2 i/p boxes are loaded or not
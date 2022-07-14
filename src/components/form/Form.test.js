import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form";

const MockForm = () => {
    return (
        <BrowserRouter>
            <Form />
        </BrowserRouter>
    );
};

describe("check form elements status", () => {
    test("is input in the form", () => {
        render(<MockForm />);

        const inputEl = screen.getByLabelText("Homepass");
        expect(inputEl).toBeInTheDocument();

        fireEvent.change(inputEl, { target: { value: "7" } });
        expect(inputEl.value).toBe("7");
    });
});

import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import App from "../../App"

describe("Testing input, select and button to create a new task", () => {
    test("User have to type the activity name on the input field", async () => {
        const { getByPlaceholderText } = render(<App />);

        const inputField = getByPlaceholderText("Digite o nome da tarefa");

        await userEvent.type(inputField, "Tarefa 1")

        expect(inputField).toHaveTextContent("Tarefa 1")
    });

    test("User have to select a day of the week", () => {
        const { getByTestId } = render(<App />);

        const selectOption = getByTestId("select-day");

        userEvent.selectOptions(selectOption, selectOption.value);

        expect().toEqual("Quarta");
    });

    test("When click in the 'Create' button, the task is add to a day", () => {
        const { getByText } = render(<App />);

        const createButton = getByText("Criar");

        userEvent.click(createButton);

        expect()
    })
})
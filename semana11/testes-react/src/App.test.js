import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import App from "./App";
import Post from "./components/Post"

test("Cria novo post após preencher campo de texto e clicar no botão Adicionar" , () => {
    const { getByPlaceholderText, getByText} = render(<App />);

    const inputPlaceholderText = getByPlaceholderText(/Novo post/i);
    const addButton = getByText(/Adicionar/i);
    const postList = [];
    
    fireEvent.change(inputPlaceholderText, { target: {value: "postName"} });

    expect(inputPlaceholderText.value).toEqual("postName");

    fireEvent.click(addButton);
    
    

});

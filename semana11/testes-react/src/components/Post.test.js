import React from 'react'
import { render, fireEvent, getByTestId } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { Post } from "./Post"

test("Quando clicar no botão de Curtir, o texto deve mudar para Descurtir", () => {
    const { getByTestId, getByText} = render(<Post/>);

    const likeButton = getByTestId(/like-button/i);
    const likeButtonText = getByText(/Curtir/i)

    fireEvent.click(likeButton);

    expect(likeButtonText).toHaveTextContent(/Descurtir/i);
});
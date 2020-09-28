import React from "react";
import { render, fireEvent, screen, getByTestId, queryByText, getByText, getAllByAltText, getAllByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import App from "./App";

describe("Testing the functionalities of the Social Network", () => {
    const createNewPost = (postText) => {
        const inputField = screen.getByPlaceholderText("Novo post");

        fireEvent.change(inputField, {target: {value: postText}});

        expect(inputField).toHaveValue(postText);

        const addButton = screen.getByText("Adicionar");

        fireEvent.click(addButton);
    };

    test("Check if the user created a post and show in the screen", () => {
        const { getByTestId } = render(<App />);

        createNewPost("randomText");

        expect(getByTestId("post-content")).toHaveTextContent("randomText");
    });

    test("Check if the user liked a post or dislike it", () => {
        const { getByTestId } = render(<App />);

        createNewPost("randomText");

        const likeButton = getByTestId("like-button");

        fireEvent.click(likeButton);

        expect(likeButton).toHaveTextContent("Descurtir");
        
        fireEvent.click(likeButton);
        
        expect(likeButton).toHaveTextContent("Curtir");
    });

    test("Check if the user deleted a post", () => {
        const { getByText, queryByTestId } = render(<App />);

        createNewPost("randomText");

        const deleteButton = getByText("Apagar");

        fireEvent.click(deleteButton);

        expect(queryByTestId("post-content")).toBeNull();
    });

    test("Check if the input field is clean after a post is created", () => {
        const { getByPlaceholderText } = render(<App />);

        createNewPost("randomText");

        const inputField = getByPlaceholderText("Novo post");

        expect(inputField).toHaveValue("");
    });

    test("Show 'No Posts' message when posts list is empty", () => {
        const { getByText, queryByText } = render(<App />);

        createNewPost("randomText");

        expect(queryByText("Nenhum post")).toBeNull();

        const deleteButton = getByText("Apagar");

        fireEvent.click(deleteButton);

        getByText("Nenhum post");
    });

    test("Show posts correct quantity in the screen", () => {
        const { getByText, queryByText, getAllByTestId } = render(<App />);

        expect(queryByText("Quantidade de posts: ")).toBeNull();

        createNewPost("randomTextAgain");
        createNewPost("justOtherRandomText");
        
        const amount = getByText(/Quantidade de posts/);

        expect(getAllByTestId("post-content").length).toEqual(2);
        
        expect(amount).toHaveTextContent("Quantidade de posts: 2");
    });

    test("The user cannot create a post if the input field is empty", () => {
        const { getByText, queryByTestId, queryByText } = render(<App />);
        
        expect(queryByText(/O campo de texto está vazio/)).toBeNull();

        createNewPost("");

        expect(queryByTestId("post-content")).toBeNull();
        getByText(/O campo de texto está vazio/);

        createNewPost("nicePost");

        expect(queryByText(/O campo de texto está vazio/)).toBeNull();
    })

})
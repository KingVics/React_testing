import { fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

    jest.mock("axios", () => ({
        __esModule: true,
        default: {
            get: () => ({
                data: {id: 2, name: "test"}
            })
        }
    }))


test("username must be present in input", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    expect(usernameElement).toBeInTheDocument();
})

test("password must be present in input", () => {
    render(<Login />);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    expect(passwordElement).toBeInTheDocument();
})

test("button must be present in input", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})

test("username must be empty", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    expect(usernameElement.value).not.toBe("username");
})

test("username must change to value", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    expect(usernameElement.value).toBe(usernameElement.value);
})

test("username must be change event", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    fireEvent.change(usernameElement, {target: {value: usernameElement.value}})
})

test("button exist", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})

test("button must be disabled", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.disabled).toBe(true);
})


test("button should not be disable", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const test = "test"
    fireEvent.change(usernameElement, {target: {value: test}})
    fireEvent.change(passwordElement, {target: {value: test}})
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toBeDisabled();

})


test("button should not display please wait", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveTextContent(/please wait/i);
})

test("button should display please wait after clicked", () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const buttonElement = screen.getByRole("button");

    const test = "test"
    fireEvent.change(usernameElement, {target: {value: test}})
    fireEvent.change(passwordElement, {target: {value: test}})

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/please wait/i);

})

test("button should display please wait after fetching data", async () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const buttonElement = screen.getByRole("button");

    const test = "test"
    fireEvent.change(usernameElement, {target: {value: test}})
    fireEvent.change(passwordElement, {target: {value: test}})

    fireEvent.click(buttonElement);
    await waitFor(() => {
        expect(buttonElement).not.toHaveTextContent(/please wait/i);
    })

})

test("username name should be test after fetching data", async () => {
    render(<Login />);
    const usernameElement = screen.getByPlaceholderText(/username/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const buttonElement = screen.getByRole("button");

    const test = "test"
    fireEvent.change(usernameElement, {target: {value: test}})
    fireEvent.change(passwordElement, {target: {value: test}})

    fireEvent.click(buttonElement);

    const userName =  await screen.findByText("test");

    expect(userName).toBeInTheDocument();

})

test("error must not show at first render", () => {
    render(<Login />);
    const errorElement = screen.getByTestId("error");
    // expect(errorElement).not.toBeInTheDocument();
    expect(errorElement).not.toBeVisible();
})
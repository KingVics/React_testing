import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('paragram must have edit as text', () => {
  render(<App />);
  const paragraphelement = screen.getByText(/Edit/i);
  expect(paragraphelement).toBeInTheDocument();
})

test('list item must be 5', () => {
  render(<App />);
  const listElement = screen.getAllByRole('listitem');
  // expect(listElement).toHaveLength(5);
  expect(listElement.length).toBe(5);
});

test("must get h1 by test id", () => {
  render(<App />);
  const h1Element = screen.getByTestId("myheader");
  expect(h1Element).toBeInTheDocument();
})

test("h1 content must be Welcome to my testing network", () => {
  render(<App />);
  const h1Content = screen.getByTestId("myheader")
  expect(h1Content.textContent).toBe("Welcome to my testing network");
})

test("get  sum by title", () => {
  render(<App/>);
  const titleElement = screen.getByTitle("sum");
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.textContent).toEqual("15")
})

test("sum must equal to 15", () => {
  render(<App/>);
  const titleElement = screen.getByTitle("sum");
  expect(titleElement.textContent).toEqual("15")
})

test("image must be in the dom", () => {
  render(<App/>);
  const imageElement = screen.getByAltText("logo");
  expect(imageElement).toBeInTheDocument();
})

test("image src must be logo", ()=> {
  render(<App/>);
  const imageElement = screen.getByAltText("logo");
  expect(imageElement.src).toBe("http://localhost/logo.svg");
})


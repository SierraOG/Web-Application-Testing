import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import App from './App'

import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const { container } = render(<App />);
  const strikesValue = getByTestId(container, "strikes");
  const ballsValue = getByTestId(container, "balls");
  expect(strikesValue.textContent).toBe("0");
  expect(ballsValue.textContent).toBe("0");
});

it("ball button works and resets when it hits 4", () => {
  const { container } = render(<App />);
  const ballsValue = getByTestId(container, "balls");
  const ballButton = getByTestId(container, "ballButton");
  expect(ballsValue.textContent).toBe("0");
  fireEvent.click(ballButton);
  expect(ballsValue.textContent).toBe("1");
  fireEvent.click(ballButton);
  expect(ballsValue.textContent).toBe("2");
  fireEvent.click(ballButton);
  expect(ballsValue.textContent).toBe("3");
  fireEvent.click(ballButton);
  expect(ballsValue.textContent).toBe("0");
});

it('strike button works and resets when it hits 3', () => {
  const { container } = render(<App />);
  const strikeValue = getByTestId(container, "strikes");
  const strikeButton = getByTestId(container, "strikeButton");
  expect(strikeValue.textContent).toBe("0");
  fireEvent.click(strikeButton);
  expect(strikeValue.textContent).toBe("1");
  fireEvent.click(strikeButton);
  expect(strikeValue.textContent).toBe("2");
  fireEvent.click(strikeButton);
  expect(strikeValue.textContent).toBe("0");  
})

it('hit button works and resets values to 0', () => {
  const { container } = render(<App />);
  const ballsValue = getByTestId(container, "balls");
  const ballButton = getByTestId(container, "ballButton");
  const strikeValue = getByTestId(container, "strikes");
  const strikeButton = getByTestId(container, "strikeButton");
  fireEvent.click(strikeButton);
  expect(strikeValue.textContent).toBe("1");
  fireEvent.click(ballButton);
  expect(ballsValue.textContent).toBe("1");
  const hitButton = getByTestId(container, "hitButton");
  fireEvent.click(hitButton);
  expect(strikeValue.textContent).toBe("0");
  expect(ballsValue.textContent).toBe("0");
})

it('foul button works', () => {
  const { container } = render(<App />);
  const strikeValue = getByTestId(container, "strikes");
  const foulButton = getByTestId(container, "foulButton");
  fireEvent.click(foulButton);
  expect(strikeValue.textContent).toBe("1");
  fireEvent.click(foulButton);
  expect(strikeValue.textContent).toBe("2");
  fireEvent.click(foulButton);
  expect(strikeValue.textContent).toBe("2");
})
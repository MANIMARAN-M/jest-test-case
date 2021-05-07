import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";
// import renderer from "react-test-renderer";

afterEach(cleanup);
test("should be have an id", () => {
  const todo = { id: 1, title: "learn jest", completed: false };
  render(<Todo todos={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("learn jest");
  expect(todoElement).not.toContainHTML("<strike>");
});
test("should render completed todo", () => {
  const todo = { id: 2, title: "learn context", completed: true };
  render(<Todo todos={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("learn context");
  expect(todoElement).toContainHTML("<strike>");
});

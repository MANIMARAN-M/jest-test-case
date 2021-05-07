import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import InputComponent from "../InputComponent";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

afterEach(cleanup);
describe("InputComponent", () => {
  it("should render my component", () => {
    render(<InputComponent />);
    const InputID = screen.getByTestId("inputtest-1");
    expect(InputID).toBeInTheDocument();
  });
  it("should create an entry in component state with the event value", () => {
    const component = shallow(<InputComponent />);
    const input = component.find("input");
    expect(input).toHaveLength(1);
    input.props().onChange({
      target: {
        name: "myName",
        value: "myValue",
      },
    });
    expect(component.state("input")).toEqual("myValue");
  });
});

import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";
import renderer from "react-test-renderer";
import Login from "../Login";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// afterEach(cleanup);
describe("Login component tests", () => {
  const wrapper = shallow(<Login />);
  it("should have a btn component", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("LOGIN");
  });
  it("should have input for email and password", () => {
    //Email and password input field should be present
    expect(wrapper.find("input#email")).toHaveLength(1);
    expect(wrapper.find("input#password")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("should have an empty email and password state var", () => {
    //Optionally test to check if password and email are empty strings on setup
    expect(wrapper.find("#email").text()).toEqual("");
    expect(wrapper.find("#password").text()).toEqual("");
  });
  it("should take a Snapshop", () => {
    let tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { Component } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      personalInformation: { name: "", email: "", phone: "" },
      educationExperience: {
        schoolName: "",
        titleStudy: "",
        dateStudy: "",
      },
      practicalExperience: {
        companyName: "",
        positionTitle: "",
        duration: "",
      },
    };
  }

  printCV() {
    console.log("print");
    document
      .querySelectorAll("button")
      .forEach((button) => (button.style.display = "none"));
    document.querySelector("h1").textContent = "CV";
    const response = window.print();
    if (response === undefined) {
      document
        .querySelectorAll("button")
        .forEach((button) => (button.style.display = ""));
      document.querySelector("h1").textContent = "CV Project";
    }
  }

  render() {
    return (
      <>
        <div className="container">
          {" "}
          <h1>CV Project</h1>
          {this.state.practicalExperience.duration !== "" &&
          this.state.edit !== true ? (
            <Display
              readState={this.state}
              setState={this.setState.bind(this)}
            />
          ) : (
            <Form
              readState={this.state}
              setState={this.setState.bind(this)}
            />
          )}
          <button
            className="print-btn"
            onClick={this.printCV}
          >
            Print
          </button>
        </div>
      </>
    );
  }
}

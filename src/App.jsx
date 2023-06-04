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

  render() {
    return (
      <>
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
        {console.log(this.state)}
      </>
    );
  }
}

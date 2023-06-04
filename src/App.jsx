import { Component } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {this.state.practicalExperience.duration !== "" ? (
          <Display onQuery={this.state} />
        ) : (
          <Form onQuery={this.setState.bind(this)} />
        )}
        {console.log(this.state)}
      </>
    );
  }
}

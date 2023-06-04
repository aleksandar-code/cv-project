import { Component } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

export default class App extends Component {
  render() {
    return (
      <>
        <h1>CV Project</h1>
        <Form />
        <Display />
      </>
    );
  }
}

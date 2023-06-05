import { useState } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

export default function App() {
  const [state, setState] = useState({
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
  });

  function printCV() {
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

  return (
    <>
      <div className="container">
        {" "}
        <h1>CV Project</h1>
        {state.practicalExperience.duration !== "" && state.edit !== true ? (
          <Display
            readState={state}
            setState={setState}
          />
        ) : (
          <Form
            readState={state}
            setState={setState}
          />
        )}
        <button
          className="print-btn"
          onClick={printCV}
        >
          Print
        </button>
      </div>
    </>
  );
}

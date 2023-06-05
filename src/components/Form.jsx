import { useState } from "react";

export function Form(props) {
  const [state, setState] = useState(this.props.readState);

  function handleSubmit(e) {
    e.preventDefault();
    props.setState(state);
    props.setState({ edit: false });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={state.personalInformation.name}
          onChange={(e) =>
            setState({
              personalInformation: {
                name: e.target.value,
                email: state.personalInformation.email,
                phone: state.personalInformation.phone,
              },
            })
          }
        />

        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          value={state.personalInformation.email}
          onChange={(e) =>
            setState({
              personalInformation: {
                name: state.personalInformation.name,
                email: e.target.value,
                phone: state.personalInformation.phone,
              },
            })
          }
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          maxLength={10}
          id="phone"
          value={state.personalInformation.phone}
          onChange={(e) =>
            setState({
              personalInformation: {
                name: state.personalInformation.name,
                email: state.personalInformation.email,
                phone: e.target.value,
              },
            })
          }
        />

        <h2>Education Experience</h2>

        <label htmlFor="school-name">School name</label>
        <input
          type="text"
          id="school-name"
          value={state.educationExperience.schoolName}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: e.target.value,
                titleStudy: state.educationExperience.titleStudy,
                dateStudy: state.educationExperience.dateStudy,
              },
            })
          }
        />

        <label htmlFor="title-study">Title of study</label>
        <input
          type="text"
          id="title-study"
          value={state.educationExperience.titleStudy}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: state.educationExperience.schoolName,
                titleStudy: e.target.value,
                dateStudy: state.educationExperience.dateStudy,
              },
            })
          }
        />

        <label htmlFor="date-study">Date of study</label>
        <input
          type="date"
          id="date-study"
          value={state.educationExperience.dateStudy}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: state.educationExperience.schoolName,
                titleStudy: state.educationExperience.titleStudy,
                dateStudy: e.target.value,
              },
            })
          }
        />

        <h2>Practical Experience</h2>

        <label htmlFor="company-name">Company name</label>
        <input
          type="text"
          id="company-name"
          value={state.practicalExperience.companyName}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: e.target.value,
                positionTitle: state.practicalExperience.positionTitle,
                duration: state.practicalExperience.duration,
              },
            })
          }
        />

        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          value={state.practicalExperience.positionTitle}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: state.practicalExperience.companyName,
                positionTitle: e.target.value,
                duration: state.practicalExperience.duration,
              },
            })
          }
        />

        <label htmlFor="duration">Duration in months</label>
        <input
          type="number"
          id="duration"
          min={0}
          value={state.practicalExperience.duration}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: state.practicalExperience.companyName,
                positionTitle: state.practicalExperience.positionTitle,
                duration: e.target.value,
              },
            })
          }
        />

        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
}

export function Form({ readState, setState }) {
  console.log(readState);
  function handleSubmit(e) {
    e.preventDefault();
    // setState(readState);
    setState({ edit: false });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={readState.personalInformation.name}
          onChange={(e) =>
            setState({
              edit: false,
              personalInformation: {
                name: e.target.value,
                email: readState.personalInformation.email,
                phone: readState.personalInformation.phone,
              },
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
            })
          }
        />

        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          value={readState.personalInformation.email}
          onChange={(e) =>
            setState({
              edit: false,
              personalInformation: {
                name: readState.personalInformation.name,
                email: e.target.value,
                phone: readState.personalInformation.phone,
              },
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
            })
          }
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          maxLength={10}
          id="phone"
          value={readState.personalInformation.phone}
          onChange={(e) =>
            setState({
              edit: false,
              personalInformation: {
                name: readState.personalInformation.name,
                email: readState.personalInformation.email,
                phone: e.target.value,
              },
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
            })
          }
        />

        <h2>Education Experience</h2>

        <label htmlFor="school-name">School name</label>
        <input
          type="text"
          id="school-name"
          value={readState.educationExperience.schoolName}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: e.target.value,
                titleStudy: readState.educationExperience.titleStudy,
                dateStudy: readState.educationExperience.dateStudy,
              },
            })
          }
        />

        <label htmlFor="title-study">Title of study</label>
        <input
          type="text"
          id="title-study"
          value={readState.educationExperience.titleStudy}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: readState.educationExperience.schoolName,
                titleStudy: e.target.value,
                dateStudy: readState.educationExperience.dateStudy,
              },
            })
          }
        />

        <label htmlFor="date-study">Date of study</label>
        <input
          type="date"
          id="date-study"
          value={readState.educationExperience.dateStudy}
          onChange={(e) =>
            setState({
              educationExperience: {
                schoolName: readState.educationExperience.schoolName,
                titleStudy: readState.educationExperience.titleStudy,
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
          value={readState.practicalExperience.companyName}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: e.target.value,
                positionTitle: readState.practicalExperience.positionTitle,
                duration: readState.practicalExperience.duration,
              },
            })
          }
        />

        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          value={readState.practicalExperience.positionTitle}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: readState.practicalExperience.companyName,
                positionTitle: e.target.value,
                duration: readState.practicalExperience.duration,
              },
            })
          }
        />

        <label htmlFor="duration">Duration in months</label>
        <input
          type="number"
          id="duration"
          min={0}
          value={readState.practicalExperience.duration}
          onChange={(e) =>
            setState({
              practicalExperience: {
                companyName: readState.practicalExperience.companyName,
                positionTitle: readState.practicalExperience.positionTitle,
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

export function Form({ readState, setState }) {
  function handleSubmit(e) {
    e.preventDefault();
    setState({
      edit: true,
      personalInformation: {
        name: readState.personalInformation.name,
        email: readState.personalInformation.email,
        phone: readState.personalInformation.phone,
      },
      educationExperience: {
        schoolName: readState.educationExperience.schoolName,
        titleStudy: readState.educationExperience.titleStudy,
        dateStudy: readState.educationExperience.dateStudy,
      },
      practicalExperience: {
        companyName: readState.practicalExperience.companyName,
        positionTitle: readState.practicalExperience.positionTitle,
        duration: readState.practicalExperience.duration,
      },
    });
  }

  const setNewState = (part, key, value) => {
    setState({
      ...readState,
      [part]: {
        ...readState[part],
        [key]: value,
      },
    });
  };

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
            setNewState("personalInformation", "name", e.target.value)
          }
        />

        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          value={readState.personalInformation.email}
          onChange={(e) =>
            setNewState("personalInformation", "email", e.target.value)
          }
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          maxLength={10}
          id="phone"
          value={readState.personalInformation.phone}
          onChange={(e) =>
            setNewState("personalInformation", "phone", e.target.value)
          }
        />

        <h2>Education Experience</h2>

        <label htmlFor="school-name">School name</label>
        <input
          type="text"
          id="school-name"
          value={readState.educationExperience.schoolName}
          onChange={(e) =>
            setNewState("educationExperience", "schoolName", e.target.value)
          }
        />

        <label htmlFor="title-study">Title of study</label>
        <input
          type="text"
          id="title-study"
          value={readState.educationExperience.titleStudy}
          onChange={(e) =>
            setNewState("educationExperience", "titleStudy", e.target.value)
          }
        />

        <label htmlFor="date-study">Date of study</label>
        <input
          type="date"
          id="date-study"
          value={readState.educationExperience.dateStudy}
          onChange={(e) =>
            setNewState("educationExperience", "dateStudy", e.target.value)
          }
        />

        <h2>Practical Experience</h2>

        <label htmlFor="company-name">Company name</label>
        <input
          type="text"
          id="company-name"
          value={readState.practicalExperience.companyName}
          onChange={(e) =>
            setNewState("practicalExperience", "companyName", e.target.value)
          }
        />

        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          value={readState.practicalExperience.positionTitle}
          onChange={(e) =>
            setNewState("practicalExperience", "positionTitle", e.target.value)
          }
        />

        <label htmlFor="duration">Duration in months</label>
        <input
          type="number"
          id="duration"
          min={0}
          value={readState.practicalExperience.duration}
          onChange={(e) =>
            setNewState("practicalExperience", "duration", e.target.value)
          }
        />

        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
}

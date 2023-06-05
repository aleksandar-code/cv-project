export function Display(props) {
  function handleEdit(e) {
    e.preventDefault();

    props.setState({ edit: true });
  }

  return (
    <>
      <form onSubmit={handleEdit}>
        <h2>Personal Information</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={props.readState.personalInformation.name}
          readOnly
        />

        <label htmlFor="mail">E-mail</label>
        <input
          type="email"
          id="mail"
          value={props.readState.personalInformation.email}
          readOnly
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          maxLength={10}
          id="phone"
          value={props.readState.personalInformation.phone}
          readOnly
        />

        <h2>Education Experience</h2>

        <label htmlFor="school-name">School name</label>
        <input
          type="text"
          id="school-name"
          value={props.readState.educationExperience.schoolName}
          readOnly
        />

        <label htmlFor="title-study">Title of study</label>
        <input
          type="text"
          id="title-study"
          value={props.readState.educationExperience.titleStudy}
          readOnly
        />

        <label htmlFor="date-study">Date of study</label>
        <input
          type="date"
          id="date-study"
          value={props.readState.educationExperience.dateStudy}
          readOnly
        />

        <h2>Practical Experience</h2>

        <label htmlFor="company-name">Company name</label>
        <input
          type="text"
          id="company-name"
          value={props.readState.practicalExperience.companyName}
          readOnly
        />

        <label htmlFor="position-title">Position Title</label>
        <input
          type="text"
          id="position-title"
          value={props.readState.practicalExperience.positionTitle}
          readOnly
        />

        <label htmlFor="duration">Duration in months</label>
        <input
          type="number"
          id="duration"
          min={0}
          value={props.readState.practicalExperience.duration}
          readOnly
        />

        <button className="edit-btn">Edit</button>
      </form>
    </>
  );
}

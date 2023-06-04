import { Component } from "react";

export class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form>
          <h2>Personal Information</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={this.props.onQuery.personalInformation.name}
            readOnly
          />

          <label htmlFor="mail">E-mail</label>
          <input
            type="email"
            id="mail"
            value={this.props.onQuery.personalInformation.email}
            readOnly
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            maxLength={10}
            id="phone"
            value={this.props.onQuery.personalInformation.phone}
            readOnly
          />

          <h2>Education Experience</h2>

          <label htmlFor="school-name">School name</label>
          <input
            type="text"
            id="school-name"
            value={this.props.onQuery.educationExperience.schoolName}
            readOnly
          />

          <label htmlFor="title-study">Title of study</label>
          <input
            type="text"
            id="title-study"
            value={this.props.onQuery.educationExperience.titleStudy}
            readOnly
          />

          <label htmlFor="date-study">Date of study</label>
          <input
            type="date"
            id="date-study"
            value={this.props.onQuery.educationExperience.dateStudy}
            readOnly
          />

          <h2>Practical Experience</h2>

          <label htmlFor="company-name">Company name</label>
          <input
            type="text"
            id="company-name"
            value={this.props.onQuery.practicalExperience.companyName}
            readOnly
          />

          <label htmlFor="position-title">Position Title</label>
          <input
            type="text"
            id="position-title"
            value={this.props.onQuery.practicalExperience.positionTitle}
            readOnly
          />

          <label htmlFor="duration">Duration in months</label>
          <input
            type="number"
            id="duration"
            min={0}
            value={this.props.onQuery.practicalExperience.duration}
            readOnly
          />

          <button className="edit-btn">Edit</button>
        </form>
      </>
    );
  }
}

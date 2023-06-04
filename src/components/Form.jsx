import { Component } from "react";

export class Form extends Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.readState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setState(this.state);
    this.props.setState({ edit: false });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Personal Information</h2>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={this.state.personalInformation.name}
            onChange={(e) =>
              this.setState({
                personalInformation: {
                  name: e.target.value,
                  email: this.state.personalInformation.email,
                  phone: this.state.personalInformation.phone,
                },
              })
            }
          />

          <label htmlFor="mail">E-mail</label>
          <input
            type="email"
            id="mail"
            value={this.state.personalInformation.email}
            onChange={(e) =>
              this.setState({
                personalInformation: {
                  name: this.state.personalInformation.name,
                  email: e.target.value,
                  phone: this.state.personalInformation.phone,
                },
              })
            }
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            maxLength={10}
            id="phone"
            value={this.state.personalInformation.phone}
            onChange={(e) =>
              this.setState({
                personalInformation: {
                  name: this.state.personalInformation.name,
                  email: this.state.personalInformation.email,
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
            value={this.state.educationExperience.schoolName}
            onChange={(e) =>
              this.setState({
                educationExperience: {
                  schoolName: e.target.value,
                  titleStudy: this.state.educationExperience.titleStudy,
                  dateStudy: this.state.educationExperience.dateStudy,
                },
              })
            }
          />

          <label htmlFor="title-study">Title of study</label>
          <input
            type="text"
            id="title-study"
            value={this.state.educationExperience.titleStudy}
            onChange={(e) =>
              this.setState({
                educationExperience: {
                  schoolName: this.state.educationExperience.schoolName,
                  titleStudy: e.target.value,
                  dateStudy: this.state.educationExperience.dateStudy,
                },
              })
            }
          />

          <label htmlFor="date-study">Date of study</label>
          <input
            type="date"
            id="date-study"
            value={this.state.educationExperience.dateStudy}
            onChange={(e) =>
              this.setState({
                educationExperience: {
                  schoolName: this.state.educationExperience.schoolName,
                  titleStudy: this.state.educationExperience.titleStudy,
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
            value={this.state.practicalExperience.companyName}
            onChange={(e) =>
              this.setState({
                practicalExperience: {
                  companyName: e.target.value,
                  positionTitle: this.state.practicalExperience.positionTitle,
                  duration: this.state.practicalExperience.duration,
                },
              })
            }
          />

          <label htmlFor="position-title">Position Title</label>
          <input
            type="text"
            id="position-title"
            value={this.state.practicalExperience.positionTitle}
            onChange={(e) =>
              this.setState({
                practicalExperience: {
                  companyName: this.state.practicalExperience.companyName,
                  positionTitle: e.target.value,
                  duration: this.state.practicalExperience.duration,
                },
              })
            }
          />

          <label htmlFor="duration">Duration in months</label>
          <input
            type="number"
            id="duration"
            min={0}
            value={this.state.practicalExperience.duration}
            onChange={(e) =>
              this.setState({
                practicalExperience: {
                  companyName: this.state.practicalExperience.companyName,
                  positionTitle: this.state.practicalExperience.positionTitle,
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
}

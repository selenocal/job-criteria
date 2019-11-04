import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { editJob, saveJob } from "../store/actions/jobActions";
import Button from "../components/Button/Button";
import Tag from "../components/Tag/Tag";
import Input from "../components/Input/Input";
import DoneIcon from "../assets/icons/done.svg";

export class JobCriteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: props.editMode,
      yearsExperience: props.job.yearsExperience,
      levelEducation: props.job.levelEducation,
      minWorkingHours: props.job.minWorkingHours,
      maxWorkingHours: props.job.maxWorkingHours,
      error: {
        yearsExperience: false,
        minWorkingHours: false,
        maxWorkingHours: false
      },
      isValid: true
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editMode !== this.props.editMode) {
      this.setState({
        editMode: this.props.editMode,
        yearsExperience: this.props.job.yearsExperience,
        levelEducation: this.props.job.levelEducation,
        minWorkingHours: this.props.job.minWorkingHours,
        maxWorkingHours: this.props.job.maxWorkingHours
      });
    }
  }

  saveForm = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.props.saveJob({
        yearsExperience: this.state.yearsExperience,
        levelEducation: this.state.levelEducation,
        minWorkingHours: this.state.minWorkingHours,
        maxWorkingHours: this.state.maxWorkingHours
      });
    }
  };

  isFormValid = () => {
    const error = this.state.error;
    let isValid = true;
    if (!this.state.yearsExperience) {
      error.yearsExperience = true;
      isValid = false;
    }
    if (!this.state.minWorkingHours) {
      error.minWorkingHours = true;
      isValid = false;
    }
    if (!this.state.maxWorkingHours) {
      error.maxWorkingHours = true;
      isValid = false;
    }
    this.setState({
      error,
      isValid
    });
    return isValid;
  };

  handleChange = (value, name, index) => {
    if (index !== undefined) {
      const arr = [...this.state[name]];
      arr[index] = value;

      this.setState({
        [name]: arr
      });
    } else {
      const error = this.state.error;
      error[name] = false;
      this.setState({
        [name]: value,
        error
      });
    }
  };

  render() {
    const {
      editMode,
      yearsExperience,
      levelEducation,
      minWorkingHours,
      maxWorkingHours,
      error,
      isValid
    } = this.state;
    const { job } = this.props;
    const educationLevels = [
      "Bachelor / Graduate",
      "GCSE / A-Level / Highschool / GED",
      "Master / Post-Graduate / PhD",
      "Vocational / Diploma / Associates Degree"
    ];

    return (
      <div>
        <Header>
          <div>
            <HeaderTitle>
              <HeaderTitleIcon>
                {editMode ? <IconTag>1</IconTag> : <DoneIcon />}
              </HeaderTitleIcon>
              Job criteria
            </HeaderTitle>
            {editMode && (
              <HeaderDescription>
                We will use the data we collect here to better target your
                desired audience.
              </HeaderDescription>
            )}
          </div>
          {!editMode && (
            <Button
              bgColor="#50b5e6"
              borderColor="#50b5e6"
              onClick={this.props.editJob}
            >
              Edit
            </Button>
          )}
        </Header>
        {editMode ? (
          <form onSubmit={this.saveForm}>
            <FormField>
              <FormHeader bold>A minimum No. years of experience</FormHeader>
              <Input
                type="text"
                placeholder="e.g 5+"
                value={yearsExperience}
                error={error.yearsExperience}
                onChange={e =>
                  this.handleChange(e.target.value, "yearsExperience")
                }
              />
            </FormField>
            <FormField>
              <FormHeader bold>Level of Education</FormHeader>
              {educationLevels.map((level, index) => (
                <FormLabel key={level}>
                  <Checkbox
                    type="checkbox"
                    checked={levelEducation[index]}
                    onChange={e =>
                      this.handleChange(
                        e.target.checked,
                        "levelEducation",
                        index
                      )
                    }
                  />
                  {level}
                </FormLabel>
              ))}
            </FormField>
            <FormField>
              <FormHeader bold>No. of working hours (per week)</FormHeader>
              <FormLabelWrapper>
                <FormLabel>
                  Min.
                  <Input
                    type="number"
                    placeholder="min"
                    value={minWorkingHours}
                    inline
                    error={error.minWorkingHours}
                    onChange={e =>
                      this.handleChange(e.target.value, "minWorkingHours")
                    }
                  />
                </FormLabel>
                <FormLabel>
                  Max.
                  <Input
                    type="number"
                    placeholder="max"
                    value={maxWorkingHours}
                    inline
                    error={error.maxWorkingHours}
                    onChange={e =>
                      this.handleChange(e.target.value, "maxWorkingHours")
                    }
                  />
                </FormLabel>
              </FormLabelWrapper>
            </FormField>
            <ButtonWrapper>
              <Button bgColor="#0cbccd" borderColor="#04919f">
                {isValid ? "Save" : "Save and Continue"}
              </Button>
            </ButtonWrapper>
          </form>
        ) : (
          <div>
            <ResultLine>
              <ResultText>A minimum No. years of experience:</ResultText>
              <span>{job.yearsExperience}</span>
            </ResultLine>
            <ResultLine>
              <ResultText>No. of working hours (per week):</ResultText>
              <span>
                {`${job.minWorkingHours}-${job.maxWorkingHours}`} hours
              </span>
            </ResultLine>
            {job.levelEducation.filter(level => level === true).length ? (
              <div>
                <EducationResult>Level of education</EducationResult>
                <div>
                  {job.levelEducation.map((level, index) =>
                    level ? (
                      <Tag key={educationLevels[index]}>
                        {educationLevels[index]}
                      </Tag>
                    ) : null
                  )}
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job.job,
  editMode: state.job.editMode
});

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
`;
const HeaderTitleIcon = styled.span`
  margin-right: 10px;
`;
const HeaderDescription = styled.div`
  margin-top: 10px;
  margin-left: 35px;
  color: #8b8888;
`;
const FormField = styled.div`
  margin-bottom: 20px;
`;
const FormHeader = styled.div`
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  padding-bottom: 5px;
`;
const FormLabelWrapper = styled.div`
  display: flex;
`;
const FormLabel = styled.label`
  display: flex;
  align-items: baseline;
  margin-right: 20px;
`;
const Checkbox = styled.input`
  margin-right: 7px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const IconTag = styled.span`
  display: inline-block;
  height: 25px;
  width: 25px;
  background-color: #a987e7;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 15px;
`;
const ResultLine = styled.div`
  margin-bottom: 10px;
`;
const ResultText = styled.span`
  color: #8b8888;
  margin-right: 5px;
`;
const EducationResult = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

JobCriteria.propTypes = {
  editJob: PropTypes.func,
  saveJob: PropTypes.func,
  editMode: PropTypes.bool,
  job: PropTypes.shape({
    yearsExperience: PropTypes.string,
    levelEducation: PropTypes.arrayOf(PropTypes.bool),
    minWorkingHours: PropTypes.string,
    maxWorkingHours: PropTypes.string
  })
};

JobCriteria.defaultProps = {
  job: {
    yearsExperience: "",
    levelEducation: [],
    minWorkingHours: "",
    maxWorkingHours: "",
    editMode: true
  }
}

export default connect(
  mapStateToProps,
  { editJob, saveJob }
)(JobCriteria);

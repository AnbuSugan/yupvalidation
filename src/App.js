import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";
import "./App.css";

function FormExample() {
  const schema = yup.object().shape({
    date: yup.string().required("Please enter a date"),
    campaignTitle: yup.string().required("Please enter a campaign title"),
    specialElements: yup.string().required("Please enter special elements"),
    additionalSpotTextarea: yup
      .string()
      .required("Please enter additional spot/traffic info"),

    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    phoneNumber: yup.string().required("Please enter your phone number"),
    emailValid: yup
      .string()
      .email("Invalid email address")
      .required("Please enter your email"),
    verification: yup.string().required("Please enter a verification code"),
    chooseMedia: yup.string().required("Please select a media option"),
    chooseLength: yup.string().required("Please select a length  option"),
    voiceTalent: yup.string().required("Please select a voicetalent option"),
    finalApproval: yup
      .string()
      .required("Please select a finalApproval option"),
  });

  const formik = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
    initialValues: {
      date: "",
      campaignTitle: "",
      specialElements: "",
      additionalSpotTextarea: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailValid: "",
      verification: "",
      chooseMedia: "",
      chooseLength: "",
      voiceTalent: "",
      finalApproval: "",
    },
  });

  return (
    <div className="wholeBody">
      <Form onSubmit={formik.handleSubmit} noValidate>
        <h1 className="fs-2 heading">Production Order Form</h1>
        <Row className="mb-3">
          {/* Date */}
          <Form.Group as={Col} controlId="validationFormikDate">
            <Form.Label htmlFor="date" className="date">
              Date of Deadline:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                type="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                isInvalid={formik.touched.date && !!formik.errors.date}
                className="inputDate"
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="dateError"
              >
                {formik.errors.date}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Campaign Title */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikCampaignTitle">
            <Form.Label htmlFor="campaignTitle" className="campaignTitle">
              Campaign Title:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="campaignTitle"
                value={formik.values.campaignTitle}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.campaignTitle && !!formik.errors.campaignTitle
                }
                className="campaignTitleInput"
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="campaignTitleError"
              >
                {formik.errors.campaignTitle}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Special Elements Text Area */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikSpecialElements">
            <Form.Label htmlFor="specialElements" className="specialElements">
              Special Elements/Jingles/Beds/Theme:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                name="specialElements"
                value={formik.values.specialElements}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.specialElements &&
                  !!formik.errors.specialElements
                }
                className="specialElementsInput"
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="specialElementsError"
              >
                {formik.errors.specialElements}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        {/* Additional Spot/Traffic Info */}
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="validationFormikAdditionalSpotTextarea"
          >
            <Form.Label
              htmlFor="additionalSpotTextarea"
              className="additionalSpotTextarea"
            >
              Additional Spot/Traffic Info:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                name="additionalSpotTextarea"
                value={formik.values.additionalSpotTextarea}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.additionalSpotTextarea &&
                  !!formik.errors.additionalSpotTextarea
                }
                className="additionalSpotTextareaInput"
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="additionalSpotTextareaError"
              >
                {formik.errors.additionalSpotTextarea}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Please tell us how to get in touch with you */}
        <h1 className="fs-2  p-3 touchWith">
          Please tell us how to get in touch with you
        </h1>
        {/* First Name & Last Name */}
        <Row className="mb-3">
          <div className="firstLastName">
            <Form.Group
              as={Col}
              controlId="validationFormikFirstName"
              className="firstNames"
            >
              <Form.Label htmlFor="firstName" className="firstName">
                First Name:
              </Form.Label>

              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="firstName"
                  className="firstNameInput"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.firstName && !!formik.errors.firstName
                  }
                />
                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                  className="firstNameError"
                >
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            {/* Last Name */}
            <Form.Group
              as={Col}
              controlId="validationFormikLastName"
              className="lastNames"
            >
              <Form.Label htmlFor="lastName" className="lastName">
                Last Name:
              </Form.Label>

              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.lastName && !!formik.errors.lastName
                  }
                  className="lastNameInput"
                />
                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                  className="lastNameError"
                >
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </div>
        </Row>
        {/* Phone Number */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikPhoneNumber">
            <Form.Label htmlFor="phoneNumber" className="phoneNumber">
              Phone Number:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="phoneNumber"
                className="phoneNumberInput"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.phoneNumber && !!formik.errors.phoneNumber
                }
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="phoneNumberError"
              >
                {formik.errors.phoneNumber}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Email */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikEmailValid">
            <Form.Label htmlFor="emailValid" className="email">
              Email:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="emailValid"
                className="emailInput"
                value={formik.values.emailValid}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.emailValid && !!formik.errors.emailValid
                }
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="emailValidError"
              >
                {formik.errors.emailValid}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Verification */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikVerification">
            <Form.Label htmlFor="verification" className="verification">
              Verification:
            </Form.Label>

            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="verification"
                className="verificationInput"
                value={formik.values.verification}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.verification && !!formik.errors.verification
                }
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="verificationError"
              >
                {formik.errors.verification}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        {/* Choose the Media Radio Buttons */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikChooseMedia">
            <Form.Label className="chooseMediaLabel">
              Choose the Media:
            </Form.Label>
            <div className="chooseMedia" id="chooseMedia">
              <div class="chooseMediaFirst">
                <Form.Check
                  type="radio"
                  label="Radio"
                  id="radio"
                  name="chooseMedia"
                  value="Radio"
                  checked={formik.values.chooseMedia === "Radio"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseMedia && !!formik.errors.chooseMedia
                  }
                />
                <Form.Check
                  type="radio"
                  label="Phone Message on Hold"
                  id="phoneMessageOnHold"
                  name="chooseMedia"
                  value="Phone Message on Hold"
                  checked={
                    formik.values.chooseMedia === "Phone Message on Hold"
                  }
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseMedia && !!formik.errors.chooseMedia
                  }
                />
              </div>
              <div class="chooseMediaSecond">
                <Form.Check
                  type="radio"
                  label="Television"
                  id="television"
                  name="chooseMedia"
                  value="Television"
                  checked={formik.values.chooseMedia === "Television"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseMedia && !!formik.errors.chooseMedia
                  }
                />

                <Form.Check
                  type="radio"
                  label="Internet Ad Campaign"
                  id="internetAdCampaign"
                  name="chooseMedia"
                  value="Internet Ad Campaign"
                  checked={formik.values.chooseMedia === "Internet Ad Campaign"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseMedia && !!formik.errors.chooseMedia
                  }
                />
              </div>
            </div>
            <div className="chooseMediaThree">
              <Form.Check
                type="radio"
                label="Video Narration"
                id="videoNarration"
                name="chooseMedia"
                value="Video Narration"
                checked={formik.values.chooseMedia === "Video Narration"}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.chooseMedia && !!formik.errors.chooseMedia
                }
              />
            </div>

            <Form.Control.Feedback
              type="invalid"
              tooltip
              className="chooseMediaError"
            >
              {formik.errors.chooseMedia}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Choose the Length: */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikchooseLength">
            <Form.Label style={{ fontSize: "25px" }} className="chooseLength">
              Choose the Length:
            </Form.Label>
            <div className="chooseLengthOption" id="chooseLengthOption">
              <div className="lenthOptionFirst">
                <Form.Check
                  type="radio"
                  label="Long Form Narration"
                  id="longForm"
                  name="chooseLength"
                  value="longForm"
                  checked={formik.values.chooseLength === "longForm"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseLength && !!formik.errors.chooseLength
                  }
                />
                <Form.Check
                  type="radio"
                  label="30 Seconds"
                  id="thirtySeconds"
                  name="chooseLength"
                  value="thirtySeconds"
                  checked={formik.values.chooseLength === "thirtySeconds"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseLength && !!formik.errors.chooseLength
                  }
                />
              </div>
              <div className="lenthOptionSecond">
                <Form.Check
                  type="radio"
                  label="60 Seconds"
                  id="sixtySeconds"
                  name="chooseLength"
                  value="sixtySeconds"
                  checked={formik.values.chooseLength === "sixtySeconds"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseLength && !!formik.errors.chooseLength
                  }
                />

                <Form.Check
                  type="radio"
                  label="15 Seconds"
                  id="fifteenSeconds"
                  name="chooseLength"
                  value="fifteenSeconds"
                  checked={formik.values.chooseLength === "fifteenSeconds"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.chooseLength && !!formik.errors.chooseLength
                  }
                />
              </div>
            </div>
            <Form.Control.Feedback
              type="invalid"
              tooltip
              className="chooseLengthError"
            >
              {formik.errors.chooseLength}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* How many voice talents are needed? */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikvoiceTalent">
            <Form.Label className="voiceTalents">
              How many voice talents are needed?
            </Form.Label>
            <div className="voiceTalentOption">
              <div className="voiceTalentFirst">
                <Form.Check
                  type="radio"
                  label="1"
                  id="one"
                  name="voiceTalent"
                  value="1"
                  checked={formik.values.voiceTalent === "1"}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.voiceTalent && !!formik.errors.voiceTalent
                  }
                />
                <Form.Check
                  type="radio"
                  label="2"
                  id="two"
                  name="voiceTalent"
                  value="2"
                  checked={formik.values.voiceTalent === "2"}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="voiceTalentSecond">
                <Form.Check
                  type="radio"
                  label="3"
                  id="three"
                  name="voiceTalent"
                  value="3"
                  checked={formik.values.voiceTalent === "3"}
                  onChange={formik.handleChange}
                />

                <Form.Check
                  type="radio"
                  label="4"
                  id="four"
                  name="voiceTalent"
                  value="4"
                  checked={formik.values.voiceTalent === "4"}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <Form.Control.Feedback
              type="invalid"
              tooltip
              className="voiceTalentError"
            >
              {formik.errors.voiceTalent}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* How many voice talents are needed? */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormikvoiceTalent">
            <Form.Label className="finalSpot">
              Final Spot Approval Required?
            </Form.Label>
            <div className="finalApprovalSpot">
              <Form.Check
                type="radio"
                label="Yes"
                id="yes"
                name="finalApproval"
                value="yes"
                checked={formik.values.finalApproval === "yes"}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.finalApproval && !!formik.errors.finalApproval
                }
              />
              <Form.Check
                type="radio"
                label="No"
                id="no"
                name="finalApproval"
                value="no"
                checked={formik.values.finalApproval === "no"}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.finalApproval && !!formik.errors.finalApproval
                }
              />
            </div>
            <Form.Control.Feedback
              type="invalid"
              tooltip
              className="finalApprovalError"
            >
              {formik.errors.finalApproval}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="button">
          <a href="https://www.123formbuilder.com/free-form-templates/Production-Order-Form-3815837/">
            Order
          </a>
        </Button>
      </Form>
    </div>
  );
}

export default FormExample;

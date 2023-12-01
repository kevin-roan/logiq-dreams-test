import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Table from "./Table";

function Form() {
  const [isFormUpdate, setFormUpdate] = useState(false);
  const [formData, setFormdata] = useState({
    username: "",
    subject: "",
    mark: 0,
    dob: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata(formData);
    console.log(formData);
    setFormdata({
      username: "",
      subject: "",
      mark: "",
      dob: "",
    });
    localStorage.setItem("studentdata", JSON.stringify(formData));
    setFormUpdate(!isFormUpdate);
  };
  return (
    <>
      <h1>Add New Student</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <label>Enter student name:</label>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
          <label>Enter Subject:</label>
          <input
            type="text"
            value={formData.subject}
            onChange={handleChange}
            name="subject"
          />
          <label>Enter Mark:</label>
          <input
            type="number"
            value={formData.mark}
            onChange={handleChange}
            name="mark"
          />
          <label>Enter Date of birth:</label>
          <input
            type="date"
            value={formData.dob}
            onChange={handleChange}
            name="dob"
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </Container>
      <Table isFormUpdated={isFormUpdate} />
    </>
  );
}

export default Form;

// styles
//

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    background-color: #e3e3e3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 2vmax;
  }
  label {
    font-size: 20px;
  }
  input {
    border: none;
    border-radius: 5px;
    height: 2vmax;
  }
  input:hover {
    cursor: pointer;
  }
  button {
    margin: 20px;
    padding: 14px;
  }
  button:hover {
    background-color: #c4eed0;
    border: 2px solid white;
    cursor: pointer;
  }
`;

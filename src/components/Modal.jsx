import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ onEdit, username }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [updatedData, setUpdateData] = useState({
    username: "",
    subject: "",
    mark: 0,
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateData(updatedData);
    console.log("udpated data", updatedData);
    onEdit(username, updatedData);
    setUpdateData({
      username: "",
      subject: "",
      mark: "",
      dob: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updatedData,
      [name]: value,
    });
  };
  useEffect(() => {
    const studentData = localStorage.getItem("studentdata");
    console.log("fetchdata", studentData);
  }, []);
  return (
    <Container>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <form onSubmit={handleSubmit}>
              <label>Enter student name:</label>
              <input
                type="text"
                value={updatedData.username}
                placeholder="username"
                onChange={handleChange}
                name="username"
              />
              <label>Enter Subject:</label>
              <input
                type="text"
                value={updatedData.subject}
                placeholder="Subject"
                onChange={handleChange}
                name="subject"
              />
              <label>Enter Mark:</label>
              <input
                type="number"
                value={updatedData.mark}
                onChange={handleChange}
                placeholder="Mark"
                name="mark"
              />
              <label>Enter Date of birth:</label>
              <input
                type="date"
                value={updatedData.dob}
                onChange={handleChange}
                placeholder="Date of birth"
                name="dob"
              />
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}

// styles
//

const Container = styled.div`
  button {
    color: black;
    padding: 0;
    margin: 0;
  }
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

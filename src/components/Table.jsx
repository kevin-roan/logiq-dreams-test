import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

function Table({ isFormUpdated }) {
  useEffect(() => {
    const storagedata = localStorage.getItem("studentdata");
    const jsonData = JSON.parse(storagedata);
    if (jsonData.username !== "") {
      console.log("working", storagedata);
      setStudentData((prevData) => [...prevData, jsonData]);
    }
  }, [isFormUpdated]);
  const [studentData, setStudentData] = useState([]);

  const handleEdit = () => {};
  const handleDelete = (fieldName, fieldValue) => {
    const updatedUserList = studentData.filter(
      (item) => item[fieldName] !== fieldValue,
    );
    setStudentData(updatedUserList);
    localStorage.setItem("studentlist", JSON.stringify(updatedUserList));
  };
  return (
    <Container>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Mark</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData &&
            studentData.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.subject}</td>
                <td>{item.mark}</td>
                <td>{item.dob}</td>
                <button onClick={() => handleDelete("username", item.username)}>
                  Delete
                </button>
                <button onClick={handleEdit}>Edit</button>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Table;

// styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20px;
  }
  table {
    border: 2px solid grey;
    border-radius: 5px;
  }
  th {
    border-bottom: 2px solid black;
    padding: 5px;
  }
  td {
    border-right: 2px solid grey;
    padding: 5px;
  }
`;

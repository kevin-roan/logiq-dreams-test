import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Graph, Modal } from ".";

function Table({ isFormUpdated }) {
  const [data, setData] = useState(false);
  useEffect(() => {
    const storagedata = localStorage.getItem("studentdata");
    const jsonData = JSON.parse(storagedata);
    if (jsonData !== null) {
      console.log("working", storagedata);
      setStudentData((prevData) => [...prevData, jsonData]);
    }
  }, [isFormUpdated, data]);
  const [studentData, setStudentData] = useState([]);

  const handleDelete = (fieldName, fieldValue) => {
    const updatedUserList = studentData.filter(
      (item) => item[fieldName] !== fieldValue,
    );
    setStudentData(updatedUserList);
    localStorage.setItem("studentlist", JSON.stringify(updatedUserList));
  };
  function handleEdit(username, updatedData) {
    const updatedStudentData = [...studentData];
    const userIndex = updatedStudentData.findIndex(
      (user) => user.username === username,
    );
    if (userIndex !== -1) {
      updatedStudentData[userIndex] = {
        ...updatedStudentData[userIndex],
        ...updatedData,
      };
      setStudentData(updatedStudentData);
      localStorage.setItem("studentdata", JSON.stringify(updatedStudentData));
    } else {
      console.log(`User with username not found.`);
    }
  }
  return (
    <>
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
                  <button
                    onClick={() => handleDelete("username", item.username)}
                  >
                    Delete
                  </button>
                  <Modal onEdit={handleEdit} username={item.username} />
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={() => localStorage.clear()}>Clear all</button>
      </Container>
      <Graph userList={studentData} />
    </>
  );
}

export default Table;

// styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 10px;
    align-self: center;
  }
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

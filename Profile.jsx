import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

function Profile() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    profile: "",
    Password: "",
  });
const [ nameSearch ,setNameSearch] = useState('')
  useEffect(() => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []); 

  const onValChange = (event) => {
    const { name, value } = event.target;
    setFormObject({
      ...formObject,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    console.log("checkVal::",checkVal)

    if (checkVal) {
      const updatedTableData = [...tableData, formObject];

      setTableData(updatedTableData);


      const isEmpty = { name: "", email: "", profile: "", Password: "" };
      setFormObject(isEmpty);

      localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    }
  };

 
const changeNameSearch = (e)=>{
  setNameSearch(e.target.value)
}
  return (
    <div>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table tableData={tableData} nameSearch={nameSearch} changeNameSearch={changeNameSearch}   />
    </div>
  );
}

export default Profile;


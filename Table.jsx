import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function Table({ tableData, changeNameSearch, nameSearch }) {
  const [selectedValue, setSelectedValue] = useState("");
  function searchByName(searchTerm) {
    searchTerm = searchTerm.toLowerCase(); // Convert the search term to lowercase for case-insensitive search

    const results = tableData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    return results;
  }

  function searchByemail(searchTerm) {
    searchTerm = searchTerm.toLowerCase(); // Convert the search term to lowercase for case-insensitive search

    const results = tableData.filter((item) =>
      item.email ===searchTerm
    );

    return results;
  }
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  let data = nameSearch ? searchByName(nameSearch) : tableData;
        data  = selectedValue?searchByemail(selectedValue):data
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>
            Name{" "}
            <input type="text" value={nameSearch} onChange={changeNameSearch} />
          </th>
          <th>
            Email
            <select
              className="custom-select custom-select-lg mb-3"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="" disabled selected>
                Open this select menu
              </option>
              {tableData.map((e) => (
                <option value={e.email} key={e.email}>{e.email}</option>
              ))}
            </select>
          </th>
          <th>Profile</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.profile}</td>
              <td>{data.Password}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
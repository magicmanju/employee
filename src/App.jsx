import React, { useState, useEffect } from "react";
const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return employee.first_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="heading color">
      <h1 className="heading color">Employee List</h1>
      <div className="color1">
        <input
          className=" search heading"
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredEmployees.map((employee) => (
        <div className="color1">
          <fieldset className="inline color1" key={employee.id}>
            <legend align="right" className="id">{employee.id}</legend>
            <div className="image">
              <img className="border" src={employee.avatar} alt="Avatar" />
            </div>
          </fieldset>
          <br />
          <span className="text">{employee.first_name}</span>
        </div>
      ))}
    </div>
  );
};

export default App;

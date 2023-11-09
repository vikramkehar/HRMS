import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddEmp = () => {
  const[newEmployee,setNewEmployee]=useState({
    firstname:"",lastname:"", dob:"", email:"", designation:"",contact:"",address:"",city:"",state:""
  });

  const addEmployee = (firstname,lastname,dob,email,designation,contact,address,city,state) => {
    setNewEmployee([...newEmployee , {firstname,lastname,dob,email,designation,contact,address,city,state}])
}
  const onInputChange=(e)=>{
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
  }

  const {firstname,lastname,dob,email,designation,contact,address,city,state}=newEmployee;
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    addEmployee(firstname,lastname,dob,email,designation,contact,address,city,state);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name *"
            name="firstname"
            value={firstname}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name *"
            name="lastname"
            value={lastname}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Birth *"
            name="dob"
            value={dob}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email *"
            name="email"
            value={email}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Designation *"
            name="designation"
            value={designation}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contact *"
            name="contact"
            value={contact}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Address *"
            rows={3}
            name="address"
            value={address}
            onChange={(e)=> onInputChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City *" name="city"
            value={city}
            onChange={(e)=> onInputChange(e)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State *"
            name="state"
            value={state}
            onChange={(e)=> onInputChange(e)}
            required
          />
        </Form.Group>
        <br />
        <div>
          <Button variant="success" type="submit" block>
            <span>SAVE</span>
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddEmp;

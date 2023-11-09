import {React, useState} from 'react'
import { Button, Modal } from "react-bootstrap";
import AddEmp from './AddEmp';

export const Employee = () => {
    const empList = [
        {  firstname: 'John', lastname:'Doe' , dob:'02/12/1993', email:"shivi02@gmail.com", designation: 'Software Developer' ,contact:"9632154545", 
       address:"HA-12", city:"Agra",state:"Uttar Pradesh"},
        { name: 'Jane Smith', designation: 'Designer' },
        {  name: 'Bob Johnson', designation: 'Project Manager' },
        // Add more data as needed
      ];
      const[emp,setEmp]=useState(empList);
      const[show,setShow]=useState(false)
      const handleShow = ()=> setShow(true);
      const handleClose = ()=> setShow(false);
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-2">Technology List</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
              <Button onClick={handleShow} className="btn btn-success"data-toggle="modal"><span>Add Employee</span></Button>
            </div>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
              {emp.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.dob}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.contact}</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>

            </tr>
          ))}
               
              </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Employee</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddEmp/>
              </Modal.Body>
              
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

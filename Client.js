import {React, useState} from 'react'

import { Button, Modal } from "react-bootstrap";


export const Client = () => {
    const employeeData = [
        { id: 1, name: 'John Doe', designation: 'Software Developer' },
        { id: 2, name: 'Jane Smith', designation: 'Designer' },
        { id: 3, name: 'Bob Johnson', designation: 'Project Manager' },
        // Add more data as needed
      ];
      const[show,setShow]=useState(false)
      const handleShow = ()=> setShow(true);
      const handleClose = ()=> setShow(false);
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-2">Client List</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
              <Button onClick={handleShow} className="btn btn-success"><span>Add Client</span></Button>
            </div>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Email</th>
                  <th>Company Name</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
              {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>
          ))}
               
              </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Client</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
              </Modal.Body>
              
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
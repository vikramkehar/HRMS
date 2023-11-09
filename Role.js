import {React, useState} from 'react'

import { Button, Modal } from "react-bootstrap";

 export const Role = () => {

    const[show,setShow]=useState(false)
    const handleShow = ()=> setShow(true);
    const handleClose = ()=> setShow(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="mt-2">Role</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
              <Button onClick={handleShow} className="btn btn-success"><span>Add Role</span></Button>
            </div>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Role Name</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
               
              </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Role</Modal.Title>
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
import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import AddTech from "./AddTech";
import EditTech from "./EditTech";

function TechnologyList () {
  const [techno, setTechno] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const[showEditModal,setShowEditModal]=useState(false);
  const [showAlert, setShowAlert] = useState(false);

  
  const [techIdToEdit, setTechIdToEdit] = useState(null);
  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd  = () => setShowAddModal(false);
  
  const handleShowEdit = (techId) => {
    debugger;
      setTechIdToEdit(techIdToEdit);
    setShowEditModal(true)};
  const handleCloseEdit = () => setShowEditModal(false);

  useEffect(() => {
    fetch("http://192.168.0.33:3000/api/v1/technology/get-TechData")
      .then((res) =>{
        return res.json();
      }).then((resp) => {
        setTechno(resp);
      }).catch((err) => {
        console.log(err.message);
      });
  },[])

  const deleteTechnology = (id) => {
    // Make an API request to delete the technology by ID
    if(window.confirm('Do you want to remove')){
      fetch("http://192.168.0.33:3000/api/v1/technology/DeleteTechRecord/"+id,{
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Technology deleted successfully
          setShowAlert(true);
          // Update the technology list by removing the deleted item
          setTechno((prevTechno) => prevTechno.filter((tech) => tech.tech_id !== id));
          window.location.reload();
        } else {
          console.error('Failed to delete technology');
        }
      })
      .catch((error) => {
        console.error('An error occurred', error);
      });
    }
    
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="mt-2">Technology List</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
              <Button
                onClick={handleShowAdd}
                className="btn btn-success"
                data-toggle="modal"
              >
                <span>Add Technology(+)</span>
              </Button>
            </div>
            <Alert show={showAlert} variant="success">
              Technology List Updated Successfully!
            </Alert>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Sr. No</th>
                  <th>Technology Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {techno &&
                  techno.map(tech => (
                    <tr key={tech.tech_id}>
                      <td>{tech.tech_id}</td>
                      <td>{tech.tech_name}</td>
                      <td>
                      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
                          <button onClick={() => handleShowEdit(tech.tech_id)} className="btn btn-success">EDIT
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
                          <button onClick={() => deleteTechnology(tech.tech_id)} className="btn btn-danger">DELETE
                          </button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  ))}

                
              </tbody>
            </table>
            {/* Add Technology Modal */}
            <Modal show={showAddModal} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add Technology</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddTech />
              </Modal.Body>
            </Modal>
            {/* Edit Technology Modal */}
            <Modal show={showEditModal} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Technology</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditTech />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                  Close Button
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
export default TechnologyList
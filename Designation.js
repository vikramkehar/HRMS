import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import AddDesignation from "./AddDesignation";
import EditDesignation from "./EditDesignation";

function Designation() {

    const [desig, setDesig] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const[showEditModal,setShowEditModal]=useState(false);
    const [showAlert, setShowAlert] = useState(false);


    const[show,setShow]=useState(false)
    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseAdd  = () => setShowAddModal(false);


    const handleShowEdit = (desigId) => {
      debugger;
      setShow(show);
      setShowEditModal(true)};
    const handleCloseEdit = () => setShowEditModal(false);
    
    useEffect(() => {
      fetch("http://192.168.0.33:3000/api/v1/technology/get-TechData")
        .then((res) =>{
          return res.json();
        }).then((resp) => {
          setDesig(resp);
        }).catch((err) => {
          console.log(err.message);
        });
    },[])

    const deleteDevice = (id) => {
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
            setDesig((prevDesig) => prevDesig.filter((des) => des.id !== id));
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
            <h3 className="mt-2">Designation</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
            <Button
                onClick={handleShowAdd}
                className="btn btn-success"
                data-toggle="modal"
              >
                <span>Add Designation(+)</span>
              </Button>
            </div>
            <Alert show={showAlert} variant="success">
              Designation List Updated Successfully!
            </Alert>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>DESIGNATION NAME</th>
                  <th>ACTION</th>

                </tr>
              </thead>
              <tbody>
              {desig &&
                  desig.map(des => (
                    <tr key={des.id}>
                      <td>{des.id}</td>
                      <td>{des.name}</td>
                      <td>
                      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
                          <button onClick={() => handleShowEdit(des.id)} className="btn btn-success">EDIT
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
                          <button onClick={() => deleteDevice(des.id)} className="btn btn-danger">DELETE
                          </button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Modal show={showAddModal} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>New Designation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <AddDesignation />
              </Modal.Body>
              
            </Modal>

            {/* Edit Technology Modal */}
            <Modal show={showEditModal} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Designation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditDesignation />
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
  )
}
export default Designation
import {React, useState,useEffect} from 'react';
import { Alert, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import AddDevice from './AddDevice';
import EditDevice from './EditDevice';

function Device () {

    const [device, setDevice] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const[showEditModal,setShowEditModal]=useState(false);
    const [showAlert, setShowAlert] = useState(false);  

    const[show,setShow]=useState(false)
    const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd  = () => setShowAddModal(false);

  const handleShowEdit = (techId) => {
    debugger;
    setShow(show);
    setShowEditModal(true)};
  const handleCloseEdit = () => setShowEditModal(false);

  useEffect(() => {
    fetch("http://192.168.0.33:3000/api/v1/technology/get-TechData")
      .then((res) =>{
        return res.json();
      }).then((resp) => {
        setDevice(resp);
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
          setDevice((prevDevice) => prevDevice.filter((device) => device.id !== id));
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
            <h3 className="mt-2">Devices</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
            <Button
                onClick={handleShowAdd}
                className="btn btn-success"
                data-toggle="modal"
              >
                <span>Add Device(+)</span>
              </Button>
            </div>
            <Alert show={showAlert} variant="success">
              Device List Updated Successfully!
            </Alert>
            <table className="table table-bodered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>ID</th>
                  <th>DEVICE NAME</th>
                  <th>ACTION</th>

                </tr>
              </thead>
              <tbody>
              {device &&
                  device.map(tech => (
                    <tr key={tech.id}>
                      <td>{tech.id}</td>
                      <td>{tech.name}</td>
                      <td>
                      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
                          <button onClick={() => handleShowEdit(tech.id)} className="btn btn-success">EDIT
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
                          <button onClick={() => deleteDevice(tech.id)} className="btn btn-danger">DELETE
                          </button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  ))}

              </tbody>
            </table>
            {/* Add Device Modal */}
            <Modal show={showAddModal} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>New Device</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <AddDevice />
              </Modal.Body>
              
            </Modal>

            {/* Edit Device Modal */}
            <Modal show={showEditModal} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Technology</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditDevice />
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
export default Device
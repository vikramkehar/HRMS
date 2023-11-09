// import React, { useEffect, useState } from "react";
// import { Alert, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
// import AddSeat from "./AddSeat";
// import EditSeat from "./EditSeat";


// function SeatList () {
//   const [seat_number, setSeat] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const[showEditModal,setShowEditModal]=useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [seatIdToEdit, setSeatIdToEdit] = useState(null);
//   const handleShowAdd = () => setShowAddModal(true);
//   const handleCloseAdd  = () => setShowAddModal(false);

//   const handleShowEdit = (seatId) => {
//     debugger;
//       setSeatIdToEdit(seatIdToEdit);
//     setShowEditModal(true)};
//   const handleCloseEdit = () => setShowEditModal(false);

//   useEffect(() => {
//     fetch("")
//       .then((res) =>{
//         return res.json();
//       }).then((resp) => {
//         setSeat(resp);
//       }).catch((err) => {
//         console.log(err.message);
//       });
//   },[])

//   const deleteSeat = (id) => {
//     // Make an API request to delete the technology by ID
//     if(window.confirm('Do you want to remove')){
//       fetch(""+id,{
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Seat deleted successfully
//           setShowAlert(true);
//           // Update the Seat list by removing the deleted item
//           setSeat((prevSeatno) => prevSeatno.filter((seat) => seat.seatId !== id));
//           window.location.reload();
//         } else {
//           console.error('Failed to delete Seat Number');
//         }
//       })
//       .catch((error)=> {
//         console.error("An error occured", error);
//       });
//     }

//   };

// //  export const SeatNumber = () => {

// //     const[show,setShow]=useState(false)
// //     const handleShow = ()=> setShow(true);
// //     const handleClose = ()=> setShow(false);
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6">
//             <h3 className="mt-2">Seat Numbers</h3>
//             <div className="d-grid d-md-flex justify-content-md-end md-3">
//               <Button 
//               onClick={handleShowAdd} 
//               className="btn btn-success"
//               data-toggle="modal"
//               >
//                 <span>Add Seat Number(+)</span>
//                 </Button>
//             </div>
//             <Alert show={showAlert} variant="success">
//               Seat List Updated Successfully..!!
//             </Alert>
//             <table className="table table-bodered table-striped table-hover mt-2">
//               <thead className="bg-dark text-white">
//                 <tr>
//                   <th>Seat Number</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//               {seatno &&
//                   seatno.map(seat => (
//                     <tr key={seat.seat_id}>
//                       <td>{seat.seat_id}</td>
//                       <td>
//                       <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
//                           <button onClick={() => handleShowEdit(seat.seat_id)} className="btn btn-success">EDIT
//                           </button>
//                         </OverlayTrigger>
//                         <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
//                           <button onClick={() => deleteSeat(seat.seat_id)} className="btn btn-danger">DELETE
//                           </button>
//                         </OverlayTrigger>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//             {/* Add Seat Moadal */}
//             <Modal show={showAddModal} onHide={handleCloseAdd}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Add New Seat Number</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <AddSeat />
//               </Modal.Body>
//             </Modal>
//             {/* Edit Seat Modal */}
//             <Modal show={showEditModal} onHide={handleCloseEdit}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Edit Seat Number</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <EditSeat />
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="secondary" onClick={handleCloseEdit}>
//                   Close Button
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SeatList



// import React, { useState, useEffect } from 'react';

// const SeatNumber = () => {
//   const [seats, setSeats] = useState([]);
//   const [newSeatName, setNewSeatName] = useState('');
//   const [editingSeat, setEditingSeat] = useState(null);

//   useEffect(() => {
//     // Fetch the list of seats when the component mounts
//     fetch('http://192.168.0.33:3000/api/v1/seat/getSeatData')
//       .then((response) => response.json())
//       .then((data) => setSeats(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const handleAddSeat = () => {
//     // Send a POST request to create a new seat
//     fetch('/api/seats', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ seat_name: newSeatName }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setSeats([...seats, data]);
//         setNewSeatName('');
//       })
//       .catch((error) => console.error('Error adding seat:', error));
//   };

//   const handleEditSeat = (seatId) => {
//     // Send a PUT request to update a seat
//     fetch(`/api/seats/${seatId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ seat_name: editingSeat }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const updatedSeats = seats.map((seat) =>
//           seat.seat_id === seatId ? { ...seat, seat_name: editingSeat } : seat
//         );
//         setSeats(updatedSeats);
//         setEditingSeat(null);
//       })
//       .catch((error) => console.error('Error editing seat:', error));
//   };

//   const handleDeleteSeat = (seatId) => {
//     // Send a DELETE request to delete a seat
//     fetch(`/api/seats/${seatId}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         const updatedSeats = seats.filter((seat) => seat.seat_id !== seatId);
//         setSeats(updatedSeats);
//       })
//       .catch((error) => console.error('Error deleting seat:', error));
//   };

//   return (
//     <div>
//       <h1>Seat Assigned Number</h1>
//       <ul>
//         {seats.map((seat) => (
//           <li key={seat.seat_id}>
//             {editingSeat === seat.seat_id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editingSeat}
//                   onChange={(e) => setEditingSeat(e.target.value)}
//                 />
//                 <button onClick={() => handleEditSeat(seat.seat_id)}>Save</button>
//               </>
//             ) : (
//               <>
//                 {seat.seat_name}
//                 <button onClick={() => setEditingSeat(seat.seat_name)}>Edit</button>
//                 <button onClick={() => handleDeleteSeat(seat.seat_id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="New Seat Name"
//           value={newSeatName}
//           onChange={(e) => setNewSeatName(e.target.value)}
//         />
//         <button onClick={handleAddSeat}>Add Seat</button>
//       </div>
//     </div>
//   );
// };

// export default SeatNumber;








import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import AddSeat from "./AddSeat";
import EditSeat from "./EditSeat";

function SeatList() {
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [seatIdToEdit, setSeatIdToEdit] = useState(null);

  const handleShowAdd = () => setShowAddModal(true);
  const handleCloseAdd = () => setShowAddModal(false);

  const handleShowEdit = (seatId) => {
    setSeatIdToEdit(seatId);
    setShowEditModal(true);
  };
  const handleCloseEdit = () => setShowEditModal(false);

  useEffect(() => {
    fetch("http://192.168.0.33:3000/api/v1/seat/getSeatData")
      .then((res) => res.json())
      .then((data) => {
        setSeatNumbers(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const deleteSeat = (id) => {
    if (window.confirm('Do you want to remove this seat?')) {
      fetch(`/api/seatNumbers/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setShowAlert(true);
            setSeatNumbers((prevSeatNumbers) =>
              prevSeatNumbers.filter((seat) => seat.seat_id !== id)
            );
          } else {
            console.error('Failed to delete seat number');
          }
        })
        .catch((error) => {
          console.error("An error occurred", error);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="mt-2">Seat Numbers</h3>
            <div className="d-grid d-md-flex justify-content-md-end md-3">
              <Button onClick={handleShowAdd} className="btn btn-success">
                <span>Add Seat Number (+)</span>
              </Button>
            </div>
            <Alert show={showAlert} variant="success">
              Seat List Updated Successfully..!!
            </Alert>
            <table className="table table-bordered table-striped table-hover mt-2">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Seat Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {seatNumbers.map((seat) => (
                  <tr key={seat.seat_id}>
                    <td>{seat.seat_id}</td>
                    <td>
                      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
                        <button onClick={() => handleShowEdit(seat.seat_id)} className="btn btn-success">
                          EDIT
                        </button>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
                        <button onClick={() => deleteSeat(seat.seat_id)} className="btn btn-danger">
                          DELETE
                        </button>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Add seat Data */}
            <Modal show={showAddModal} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Seat Number</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddSeat />
              </Modal.Body>
            </Modal>
            <Modal show={showEditModal} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Seat Number</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditSeat seatId={seatIdToEdit} />
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
}

export default SeatList;

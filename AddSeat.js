// import  { React,useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';

// const AddSeat = () => {
//     const [seat_number, setSeat]= useState ("");
//     const navigate=useNavigate();

//     const handleSubmit=(e) => {
//         e.preventDefault();
//         const seatdata={seat_number};

//         fetch("", {
//             method: "POST",
//             headers:{"content-type":"application/json"},
//             body:JSON.stringify(seatdata),
//         }).then((res)=> {
//             alert('Saved successfully... ')
//             window.location.reload();
//             navigate('/master/SeatNumber');
//         }).catch((err)=> {
//             console.log(err.message)
//         })
//     }

// return (
//     <Form onSubmit={handleSubmit}>
//          <Form.Group>
//          <Form.Label>Seat Number</Form.Label>
//             <Form.Control className='mt-2' type='text' placeholder='Seat Number*' required  value={seat_number} onChange={(e)=>setSeat(e.target.value)}>

//             </Form.Control>
//         </Form.Group>
//         <br/>
//         <div>
//          <Button variant='success' type='submit' block ><span>SAVE</span></Button>
//         </div>
         
          
//     </Form>
//  )
// }
     
// export default AddSeat




import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddSeat = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const seatData = { seat_number: seatNumber };

    fetch("http://192.168.0.33:3000/api/v1/seat/postSeatData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(seatData),
    })
      .then((res) => {
        alert("Saved successfully.");
        window.location.reload();
        navigate("/master/SeatNumber");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Seat Number</Form.Label>
        <Form.Control
          className="mt-2"
          type="text"
          placeholder="Seat Number *"
          required
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
        />
      </Form.Group>
      <br />
      <div>
        <Button variant="success" type="submit" block>
          <span>SAVE</span>
        </Button>
      </div>
    </Form>
  );
};

export default AddSeat;

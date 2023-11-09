// import  {React, useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// const EditSeat = () => {
//     const [seatno, setseatno] = useState("");
//     const { seatId } = useParams();


//     useEffect(() => {
//         debugger;
//         fetch("" + seatId)
//           .then((res) => res.json()) 
//           .then((data) => {
//             setId(data.seat_id);
//           })
//           .catch((error) => {
//             console.log(error.message);
//           });
//     }, [seatId]);

//     const[seat_number,setSeat]=useState("");
//     const[seat_id,setId]=useState("");

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const seatdata={seat_id,seat_number};


//         fetch(""+seatId,{
//       method:"PUT",
//       headers:{"content-type":"application/json"},
//       body:JSON.stringify(seatdata),
//     }).then((res)=>{
//       alert('Saved successfully. ')
//       window.location.reload();
//     }).catch((err)=>{
//       console.log(err.message)
//     })
//   }


//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label>Seat Number</Form.Label>
//         <Form.Control
//           className="mt-2"
//           type="text"
//           placeholder="Seat Number *"
//           required
//           value={seatNumber}
//           onChange={(e) => setSeat(e.target.value)}
//         ></Form.Control>
//       </Form.Group>
//       <br />
//       <div>
//         <Button variant="success" type="submit" block>
//           <span>SAVE</span>
//         </Button>
//       </div>
//     </Form>
//   );
// };

// export default EditSeat;





import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditSeat = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const { seatId } = useParams();

  useEffect(() => {
    fetch(`http://192.168.0.33:3000/api/v1/seat/updateSeat/:Seat_id${seatId}`)
      .then((res) => res.json())
      .then((data) => {
        setSeatNumber(data.seat_number);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [seatId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const seatData = { seatNumber };

    fetch(`/api/seatNumbers/${seatId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(seatData),
    })
      .then((res) => {
        alert("Saved successfully.");
        window.location.reload();
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

export default EditSeat;

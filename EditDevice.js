import  {React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditDevice = () => {

  const [deviceName, setDeviceName] = useState("");
  const { deviceId } = useParams();

  useEffect(() => {
    debugger;
    fetch("http://192.168.0.33:3000/api/v1/technology/getByIdTechnology/" + deviceId)
      .then((res) => res.json()) 
      .then((data) => {
        setId(data.id); 
        setName(data.name); 
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [deviceId]);

  const[name,setName]=useState("");
  const[id,setId]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const devicedata={id,name};

    
    fetch("http://192.168.0.33:3000/api/v1/technology/updateRecordTech/"+deviceId,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(devicedata),
    }).then((res)=>{
      alert('Saved successfully. ')
      window.location.reload();
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Device Name</Form.Label>
        <Form.Control
          className="mt-2"
          type="text"
          placeholder="Name *"
          required
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <br />
      <div>
        <Button variant="success" type="submit" block>
          <span>SAVE</span>
        </Button>
      </div>
    </Form>
  )
}

export default EditDevice
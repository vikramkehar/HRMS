import  {React, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";



const EditTech = () => {
  const [techName, setTechName] = useState("");
  const { techId } = useParams();
  
  
  useEffect(() => {
    debugger;
    fetch("http://192.168.0.33:3000/api/v1/technology/getByIdTechnology/" + techId)
      .then((res) => res.json()) 
      .then((data) => {
        setId(data.tech_id); 
        setName(data.tech_name); 
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [techId]);

  const[tech_name,setName]=useState("");
  const[tech_id,setId]=useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const techdata={tech_id,tech_name};


    fetch("http://192.168.0.33:3000/api/v1/technology/updateRecordTech/"+techId,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(techdata),
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
        <Form.Label>Technology Name</Form.Label>
        <Form.Control
          className="mt-2"
          type="text"
          placeholder="Name *"
          required
          value={techName}
          onChange={(e) => setTechName(e.target.value)}
        ></Form.Control>
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

export default EditTech;

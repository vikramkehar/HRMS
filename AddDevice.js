import  { React,useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddDevice = () => {

    const[name,setName]=useState("");
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const devicedata={name};
        
        fetch("http://192.168.0.33:3000/api/v1/technology/post-technology",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(devicedata),
          }).then((res)=>{
            alert('Saved successfully. ')
            window.location.reload();
            navigate('/master/device');
          }).catch((err)=>{
            console.log(err.message)
          })
    }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
       <Form.Label>Device Name</Form.Label>
       <Form.Control className='mt-2' type='text' placeholder='Name *' required  value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
    </Form.Group>
    <br/>
    <div>
       <Button variant='success' type='submit' block ><span>SAVE</span></Button>
    </div>
   
    
  </Form>
  )
}

export default AddDevice
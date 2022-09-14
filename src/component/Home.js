import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";
const Home = () => {
    const [inpval,setInpval] = useState({
        nam :"",
        email:"",
        date:"",
        password:""

    })

    const [data,setData] = useState([])
    const getdata=(e)=>{
        const {value,name} = e.target
        

        setInpval(()=>{
                return{
                    ...inpval,
                    [name]:value
                }       
        })
    }
    const adData=(e)=>{
        e.preventDefault()

        const {nam,email,date,password} = inpval;

        localStorage.setItem("user",JSON.stringify([...data,inpval]));
        
    }
  return (
    <div>
      <div className="container mt-3">
        <section>
          <div className="left_data mt-8">
            <h3 className="text-centre col-lg-4">User Registration</h3>
            <Form>
              <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getdata} name="nam" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getdata}/>
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={adData}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have an Account <span><NavLink to="/login">LogIn</NavLink></span></p>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default Home;

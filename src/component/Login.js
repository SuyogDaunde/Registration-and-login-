import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const history = useNavigate();
    const [inpval,setInpval] = useState({
        nam :"",
        // email:"",
        // date:"",
        password:""

    })


    const [data,setData] = useState([])
    const getdata=(e)=>{
        const {value,name} = e.target
        // console.log(value,name)

        setInpval(()=>{
                return{
                    ...inpval,
                    [name]:value
                }       
        })
    }
    const adData=(e)=>{
        e.preventDefault()

        const getUser = localStorage.getItem("user")

        const {nam,password} = inpval;

        if(getUser && getUser.length){
            const userdata = JSON.parse(getUser);
            const userlogin = userdata.filter((el,k)=>{
                return el.nam ===nam && el.password === password
            })
    
        
        if(userlogin.length === 0){
            alert("Invalid details")
        }
        else{
            history("/details")
        }
    }
    }
  return (
    <div>
      <div className="container mt-3">
        <section>
          <div className="left_data mt-3">
            <h3 className="text-centre col-lg-4">Sign In</h3>
            <Form>
             
              <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Control type="text" name="nam" onChange={getdata} placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={adData}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have an Account <span>SignIn</span></p>
          </div>
          
        </section>
      </div>
    </div>
  )
}

export default Login

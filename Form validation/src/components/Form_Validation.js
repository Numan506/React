import React, { Component } from 'react'

class Form_Validation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            password:"",
            confirmPassword:""

        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
 
        if (e.target.name==="firstName") {
         var namePattern = (/^[a-zA-Z]+$/)
         if (!namePattern.test(e.target.value)) {
             this.setState({
                 firstName:"First name is not valid"
             })
         }
        }
 
        if (e.target.name==="lasttName") {
         var namePattern = (/^[a-zA-Z]+$/)
         if (!namePattern.test(e.target.value)) {
             this.setState({
                 lastName:"Last name is not valid"
             })
         }
        }
 
        if (e.target.name==="email") {
         const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regex.test(e.target.value)){
                this.setState({
                 email:"Email is invalid"
                })
            }
        }
 
        if (e.target.name==="phone") {
         if(!Number(e.target.value)){
             this.setState({
              email:"number is invalid"
             })
         }
     }
 
     if(e.target.name=="password"){
         if(!Number(e.target.value)){
             this.setState({
                 password:"password in invalid"
             })
         }
     }  
 
     if (e.target.name==="confirmPassword") {
         if(!Number(e.target.value)){
             this.setState({
                 password:"confirmPassword is invalid"
             })
         }
     }
     }
   
    handleSubmit=(e)=>{
   
        
    }
   

    
    render() {
        return (
            <div>
                <div>
                    <p>{this.state.firstName}</p>
                    <p>{this.state.lasttName}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.number}</p>
                    <p>{this.state.password}</p>
                    <p>{this.state.confirmPassword}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div>
                            <input onChange={this.handleChange} type="text" name="firstName" placeholder="Enter Your First Name: " />
                        </div><br/>

                        <div>
                            <input onChange={this.handleChange} type="text" name="lastName" placeholder="Enter Your Last Name: " />
                        </div><br/>

                        <div>
                            <input onChange={this.handleChange} type="email" name="email" placeholder="Enter Your Email: " />
                        </div><br/>

                        <div>
                            <input onChange={this.handleChange} type="phone" name="phone" placeholder="Enter Your Phone: " />
                        </div><br/>

                        <div>
                        <input onChange={this.handleChange}  type="password" name="password" placeholder="enter your password: " />
                    </div><br/>

                    <div>
                        <input onChange={this.handleChange}  type="password" name="confirmPassword" placeholder="enter your conformPassword: " />
                    </div><br/>

                    <div>
                        <button>Submit</button>
                    </div><br/>


                    </div>
                </form>
            </div>
        )
    }
}

export default Form_Validation
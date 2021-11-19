import React, { Component } from 'react'
import Form_Validation from './Form_Validation'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:"",
            password:"",
            errors:{},
            msg:""
         
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    formValidation=()=>{
        const{firstName,password} = this.state;
        // let isValid=true;
        const errors = {};
     

        if(firstName.trim().length<6){
           errors.userNamelength="Username must be use minimum 6 charecter"
        //    isValid=false
        }

        if(password.trim().length<8){
            errors.userPasswordlength="Password must be use minimum 8 charecter"
            // isValid=false
           
         }else if(true ){
            
            this.setState({msg:"Successfully Submit"})
            
            // return isValid
         }
         this.setState({errors})
        //  return isValid

          
    }
   
    handleSubmit=(e)=>{
       e.preventDefault()
       const validForm = this.formValidation()

    }

   
    
    render() {
        const{firstName,password,errors,msg}=this.state
        
        return (
            <div>
                
                  <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div>
                            <input onChange={this.handleChange} type="text" name="firstName" placeholder="Enter Your First Name: " />
                        </div><br/>

                    
                    

                        <div>
                        <input onChange={this.handleChange}  type="password" name="password" placeholder="enter your password: " />
                    </div><br/>

                 

                    <div>
                        <button>Submit</button>
                        {Object.keys(errors).map((key)=>{
                            return <div style={{color:"green"}}>{errors[key]}</div>
                          
                        })}
                        <div style={{color:"tomato"}}>{msg}</div>

            
                    </div><br/>


                    </div>
                </form>
            </div>
        )
    }
}

export default Form
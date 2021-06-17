import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

 class Conditional_rendering extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              login : false
         }
     }
    
    render() {
     const {login} =this.state 
     let element; 

    // .............If Else Statement................


    //    if (login){
    //        return <HomePage />
    //    }
    //    else{
    //        return <LoginPage />
    //    }


// .............ELEMENT Statement................

        // if (login){
        //     element =<HomePage />
        // }
        // else{
        //     element =<LoginPage />
        // }
        // return(
        //     <div>
        //         {element}
        //     </div>

        // )


 // .............Ternari Statement................

           element= login ?<HomePage /> : <LoginPage />
           return(
               <div>
                   {element}
               </div>
           )

    }
}

export default Conditional_rendering
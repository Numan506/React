const name = "Abu Jakaria Md Numan"
const universityName = "City University"
const dept = "CSE"
const date = new Date();
const dateName = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getYear();

// const headingStyle = {
//   backgroundColor :"green",
//   color :"White",
//   textAlign :"center",
//   fontSize :"3rem"

// }

function Card(){
       return   <div className="card">
                        <h3 className="cardname"> {"My Name is : " +name}</h3>
                        <p className="cardTitle">{universityName}</p>
                        <p className="cardDes">{dept}</p>
                        <p className="cardFooter">{"Date is: "+dateName +"/"+getMonth+"/"+getYear}</p>
                 </div>
}

export default Card;
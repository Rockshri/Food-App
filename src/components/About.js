import { useEffect } from "react";
// import User1 from "./User1";
// import User2 from "./User2";

const About = ()=>{

  console.log("1");
  useEffect(()=>{
    console.log("2");
    
  })

  console.log("3");
  
  

    return(
        <div>
          {console.log("4")
          }
          <h1>About us</h1>
          <h2>This is about us</h2>
          {/* <User1/>
          <User2/> */}

        </div>
    )
}
export default About;
import { useEffect } from "react";

const User1 = ()=>{
    console.log("User1 1");

    useEffect(()=>{
        console.log("User1 2");
        
    })

    console.log("User1 3");
    
    

    return(
        <div>
          {console.log("User1 4")
          }
        </div>
    )
}
export default User1;
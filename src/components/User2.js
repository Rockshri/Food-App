import { useEffect } from "react";

const User2 = ()=>{

    console.log("user2 1");

    useEffect(()=>{
        console.log("User2 2");


        
    })
     console.log("User2 3");
         

    return(
        <div>
        {console.log("user2 4")}
        </div>
    )
}

export default User2;
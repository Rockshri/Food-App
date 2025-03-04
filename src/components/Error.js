import { useRouteError } from "react-router-dom";
//this hook is given by react-router-dom. 
//it gives all the errors in our path.


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>Oops!!! Something went wrong</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;
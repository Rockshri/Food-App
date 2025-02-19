import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";


it("Should render Header componant with a login button", ()=>{
    
    //we have to provide every dependencies which i have used in <Header/> componant.
    //like if we r using redux store in Header componant then we have to provide it or 
    //if we r using any function of react router dom then we have to provide context of react router dom in test file as well.
    // render(<Header/>); This gives error.
    //to get rid of this.
    render(
    <BrowserRouter> 
    <Header/>
    </BrowserRouter> 
);
    //Querying
    // const loginButton = screen.getByRole("button");
    
    //if there is multiple button and you want to find out specific button in many buttons then 
    //you can add more parameters in it. 
    const loginButton = screen.getByRole("button", { name: "Login" });
    
    // expect(loginButton).toBeInTheDocument();


    //clicking button
    //fireevent fire the event 
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
   
    //Assertion
    
    expect(logoutButton).toBeInTheDocument();
});
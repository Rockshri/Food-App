import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

//Below import gives all function related to expect assertion.
import "@testing-library/jest-dom";



//"describe" keyword is used to group multiple test cases.
//u can have multiple describe block or
//u can have nested describe block as well.

describe("Contact us page test cases", ()=>{
      //if you want to run any cleanup process before  running test then these helper functions will be used
      
      //if u want do do something before all test, then there is a function named
       beforeAll(()=>{
        console.log("Before all test case");
    })

      //if u want to run something before each test case
       beforeEach(()=>{
        console.log("Before each test case");
    })

    //if u want to  run anything after running or completing all tests
      afterAll(()=>{
        console.log("After all");
        
      });

     // if u want to run anything after running each test case
     afterEach(()=>{
        console.log("After Each");
        
     }) 









    //Instead of using *test* we can write *it* also. It is just alias of test.
    it("should load contact us componant on Dom or not",()=>{
        //render
         render(<Contact/>);
        
         //querying
        const heading = screen.getByRole("heading");
     
       //assertion
        expect(heading).toBeInTheDocument();
     });
     //when u have to test UI componant then
     //we have to render this componant to the jsdom by
     //using render method.
     
     it("should load button inside Contact componant", ()=>{
          render(<Contact/>);
          //this render the whole componant i.e <Contact/>
     
         //  const button = screen.getByRole("button");
         const button = screen.getByText("Submit");
         //this find the text submit in the componant 
         
          //Assertion
          expect(button).toBeInTheDocument();
     });
      
     //this load one input box
     it("should load the input inside Contact componant",()=>{
         render(<Contact/>);
     
         const inputName = screen.getByPlaceholderText("name");
     
         expect(inputName).toBeInTheDocument();
     });
     
     //if you want to get all input boxes in componant
     it("should load many input boxes on the componant",()=>{
         //render
         render(<Contact/>);
         
         //querying
         //wherever in case of multiple then use *All*.
         const inputBoxes = screen.getAllByRole("textbox");
         console.log(inputBoxes.length);
         
         //assertion
         expect(inputBoxes.length).toBe(2);
     })
});




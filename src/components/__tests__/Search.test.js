//Integration Tesing

import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json";
// import { act } from "react-dom/test-utils";
import { act } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//We have trying to make the fetch function exactly like the browser gives us
//bcz fetch is javascript function. But this one not use for actual network call.
//we have to just make it to run test cases.
//So we need only mock data.
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

//You don't need browser or internet to run the test cases.


//whenever you are doing async operation, then wrap your render method into
//act() function.
//Act() comes from "react-dom/test-utils". 
//It will assures that all updates and side effects should be performed before assertion were made. 
describe("Should render Body compponant  with search and top rated restaurant",()=>{

    
    it("should load the body componant with search", async()=>{
        await act( async()=>render(
         <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
     
        //if you dont have placeholder or you dont know how to get input by label
        //then get the element by getByTestId() and mentioning the element by data-testid = "";
        const searchBtn = screen.getByRole("button", { name: "Search" });
     
        const searchInput = screen.getByTestId("searchinput");
     
        fireEvent.change(searchInput, { target : { value : "hut" }});
     
        fireEvent.click(searchBtn);
     
     //    console.log(searchBtn);
     
     //    expect(searchBtn).toBeInTheDocument();
     const card = screen.getAllByTestId("resCard");
     // console.log(card.length);
     // console.log(card);
     
     expect(card.length).toBe(2);
     });
     
     
     it("Search Top rated restaurant",async()=>{
         await act(async()=>render(<BrowserRouter>
             <Body/>
             </BrowserRouter>)
         )
         
         const cardBeforeTopRated = screen.getAllByTestId("resCard");
         expect(cardBeforeTopRated.length).toBe(20);
     
         const topRatedButton = screen.getByText("Top Rated Restaurants");
     
         fireEvent.click(topRatedButton);
     
         const cardsAfterFilter = screen.getAllByTestId("resCard");
     
         expect(cardsAfterFilter.length).toBe(14);
     });
})

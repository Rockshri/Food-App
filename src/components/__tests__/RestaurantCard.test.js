import { screen, render } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resDataMocks.json"
import "@testing-library/jest-dom";

import { withOfferLabel } from "../RestaurantCard";


it("should render RestaurantCard componant with props data",()=>{

     render(<RestaurantCard resData={ MOCK_DATA[0] }/>);
    
     const name = screen.getByText("Pizza Hut");

     expect(name).toBeInTheDocument();
});

it("should render Offer Restauarant card with props data", ()=>{
     const RestaurantCardOffer = withOfferLabel(RestaurantCard);

     render(<RestaurantCardOffer resData={ MOCK_DATA[1] } />);

     const name = screen.getByText("Burger King");

     expect(name).toBeInTheDocument();
})
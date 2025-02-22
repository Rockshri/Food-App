import { act, fireEvent, render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import MOCKRESMENUDATA from "../mocks/mockResMenu.json"
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCKRESMENUDATA);
        }
    })
})


it("should load Restaurant menu and show in cart", async ()=>{

    await act( async()=> render(
        //we can also render multiple componant
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>
        </BrowserRouter>
    
));

    const accordianHeader = screen.getByText("Cheese Burst Pizza (31)");

    fireEvent.click(accordianHeader);

   //here <Itemcard/> componant is child of <RestaurantMenu/> componant. So no need to import <Itemcard/> componant. 
    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(31);

    const addBtn = screen.getAllByRole("button", { name:"ADD+" });

    //  console.log(addBtn.length);
      fireEvent.click(addBtn[0]);

    const cartLink = screen.getByText("Cart - 1");

    expect(cartLink).toBeInTheDocument();

    //here we r going to get rendering card componant. So data-testid is same so it renders sum of previous and current 
    //here, cart is not child of any, so we have to render it separately unlike Itemcard.
    expect(screen.getAllByTestId("foodItems").length).toBe(32);
})
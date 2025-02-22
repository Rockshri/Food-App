Types of testing

~ Unit testing
You test your react componant in isolation. 
you testing one componant.


~ Intergration testing
Here you testing integration of the componant.


~ End to end testing ( e2e testing )
testing the website when user lands o the websites till the user leaves the website. And we testing all the flows.


libraries we are using to do testing..........



# settingup testing in out app(In CRA or Vite all these configurations are avaliable default)
- Install React testing library
- Install jest
- Install babel dependencies
- babel.config.js configuration file

here parcel bundler also uses internal babel config for transpiling the code, and we are also using babel config as per our requirement. So, there is a conflict between parcel's config babel and our babel config, so here parcel get confused. We have to override parcel babel config to our babel config.
Like we want to use babel.config.js file for transpilation but parcel have integrated config of babel file. TO disable that file and to use babel.config.js file, we make file .parcelrc and put config code in it.

- configure .parcelrc config file to disable default babel traspilation.
- Jest configuration(*npx jest --init*)
( jsdom :- when you run test cases it wil not run on browser, to run it they need some enviroment. It is like a browser. All the testing code run over here. So when we test like Header.js file it will loaded in jsdom.
jsdom not have all features of DOM.)

- Install jsdom library(*npm install --save-dev jest-environment-jsdom*)

(the test file should be in dunder folder i.e __test__, & files must be like sum.test.js. Bcz when we run *npm run test* query it will try to find dunder folder and filename.test.js file as well).

- Install *@babel/preset-react* library to make JSX work in test cases.

- Include ["@babel/preset-react", {runtime : "automatic"}] inside the *babel.config.js* file. It helps testing library to convert jsx code to html so that it can be readable.

- Install *npm i -D @testing-library/jest-dom*

- Import *@testing-library/jest-dom* in testing file. It will list of functions for assertions.   








# Redux/Redux Toolkit

- Redux Store: It is big object, and it is kept global central place.
          - Any componant can access this redux store to write data or to read data.
          - Most of major data we kept in redux store.

- Slice : It used to keep data separate, we use multiple slices.
         - Like if we want to keep info about user login then there can be user slice.
         - Initially it can be empty.
         - you cannot directly modify slice.
         -To modify it we dispatch an action, and action call the function and that function modify the any slice.
         - The function is called reducer function. It modify the cart or slice.
         
         To write data
         -*In this project, we click the add button which dispatch the action which call the reducer function which update the slice of redux store.*

         To read data from the cart
         - For that we use known as selector, to read the data from the store.
         -*When we use selector then this phenomanon is called the subscribe to our store*. so if the data changes then it will automatiocallly update the data on the React code.

         Add button ->  Dispatch(action) -> call reducer function -> update Slice in the store -> subscribed the store(selector) -> Cart will update 

# Process to install redux

- Install @reduxjs/toolkit and react-redux.
- Build our store
- Connect our store to our app.
- Slice(cartSlice)
- dispatch(action)
- Selector

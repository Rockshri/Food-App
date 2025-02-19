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

here parcel bundler also uses internal babel config for transpiling the code, and we are also using babel config as per our requirement. SO there is a conflict between parcel's config babel and our our babel config, so here parcel get confused. We have to override parcel babel config to our babel config.
Like we want to use babel.config.js file for transplation but parcel have integrated config of babel file. TO disable that file and to use babel.config.js file, we make file .parcelrc and put config code in it.

- configure .parcelrc config file to disable default babel traspilation.
- Jest configuration(*npx jest --init*)
( jsdom :- when you run test cases it wil not run on browser, to run it they need some enviroment. It is like a browser. All the testing code run over here. So when we test like Header.js file it will loaded in jsdom.
jsdom not have all features of DOM.)

- Install jsdom library(*npm install --save-dev jest-environment-jsdom*)

(the test file should be in dunder folder i.e __test__, & files must be like sum.test.js. Bcz when we run *npm run test* query it will try to find dunder folder and .test.js file as well).

- Install *@babel/preset-react* library to make JSX work in test cases.

- Include ["@babel/preset-react", {runtime : "automatic"}] inside the *babel.config.js* file. It helps testing library to convert jsx code to html so that it can be readable.

- Install *npm i -D @testing-library/jest-dom*

- Import *@testing-library/jest-dom* in testing file. It will list of functions for assertions. 
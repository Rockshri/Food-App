import Sum from "../Sum";
//test function takes two argument ie String and Callback function
test("Sum of two numbers",()=>{
  const result = Sum(3, 4);

  //Assertion
  expect(result).toBe(7);

});
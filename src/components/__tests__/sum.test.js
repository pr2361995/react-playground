import { sum } from "../../utils/sum"

test('add two value ', () => { 
   const result =  sum(3,4);
   //    Assertion
   expect(result).toBe(5);
   expect(result).toBe(7);
})
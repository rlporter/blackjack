/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


//The hand is an array of numbers. I want to write a function that loops through the items in the array, assigns each a number value and then totals those numbers.


let hand = [];

function handSum(){
  let output = (value += hand[]);
  let value = i;
  for (var i = 0; i < hand.length; i++) {
    if(i <= '10'){
      value = Number(i);
    }else if ((i='K') || (i='Q') || (i='J')){
      value = 10;
    }else if (i='A' && (output <= 10)){
      value = 11;
    }else {
      value = 1;
    }
  }
  return output;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

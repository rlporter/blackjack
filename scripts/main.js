/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let Value = i;
  let total = (Value + hand[i]);
  for (var i = 0; i < hand.length; i++) {
    if(i <= "10"){
      Value = i;
    if ((i="K") || (i="Q") || (i="J")){
      Value = "10";
    }
    if (i="A" && (total <= "10")){
      Value = "11";
    }
    if (i="A" && (total >= "18")){
      Value = "1";
    }
    }
  }
  return handValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

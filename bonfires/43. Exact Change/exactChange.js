//function to find total cash in drawer
function totalCID(cid) {
    var totalCash = Math.round(cid.reduce(function(a,b){
        return a+b[1];
    }, 0) *100);
    return totalCash/100;
}

// insufficient funds/closed/ calculate change 
function drawer(price, cash, cid) {
  var change;
  var changeNeeded = cash - price;
  if (totalCID(cid) < changeNeeded) {
      return "Insufficient Funds";
  } else if (totalCID(cid) === changeNeeded) {
      return "Closed";
  } else {
    return calculateChange(changeNeeded, cid);
    }
}

function maxReturn (changeNeeded, cashOnHand, coinbilltype){
    if (changeNeeded <= coinbilltype){
        return 0;
    }

    var temp1 = Math.floor(changeNeeded/coinbilltype);
    var temp2 = Math.floor(cashOnHand/coinbilltype);

   if (temp1 >temp2){
       return temp2;
   } else {
       return temp1;
   }
    
}
    
function calculateChange(changeNeeded, cid){
// in pennies in attempts to avoid weird floating point rounding issues 
  var coinbilltype = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

/*

cash - price = change * 100 
if change = 10000 return 10000
if change doesn't equal the number 
loop through  
*/

  var cashOnHand ={};

  var arrayKeys = Object.keys(coinbilltype);
  arrayKeys.reverse();
  cid.reverse();
  
 for(var i = 0; i < cid.length; i++){
      cashOnHand[cid[i][0]] = Math.round(cid[i][1] * 100);
  }

  var changeReturned = [];
  var remainingChange = changeNeeded * 100;

  for(var keys in arrayKeys){
    var count = maxReturn (remainingChange,  cashOnHand[arrayKeys[keys]], coinbilltype[arrayKeys[keys]]);
    if (count>0){
      changeReturned.push([arrayKeys[keys], (count * coinbilltype[arrayKeys[keys]])/100]);
      remainingChange = remainingChange - count*coinbilltype[arrayKeys[keys]];
    }
  }
 return changeReturned;
}




// total in drawer 



drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);


//[['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ])
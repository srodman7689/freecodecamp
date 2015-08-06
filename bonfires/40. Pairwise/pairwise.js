function pairwise(arr, arg) {
  
  seenJ = [];
  total = 0;
  var seenI = false;

  for(var i = 0; i < arr.length-1; i++) {
    
    seenI = false;
   
    for(var j = i+1; j < arr.length; j++) {
    
      test = seenJ.every(function(elm) {
        return elm !== j && elm !== i;
      });
      
      if(test) {
        
        if(arr[i] + arr[j] === arg && seenI === false) {
          total = total + i + j;
          seenI = true;
          seenJ.push(j);
        }
        
      }
          
    }
    
  }
  
  return total;
}

pairwise([1,4,2,3,0,5], 7);
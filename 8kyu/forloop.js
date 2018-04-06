function pickIt(arr){
  var odd=[],even=[];

  for (var i = 0; i < arr.length; i++) {
   console.log(arr.length);
   console.log(arr[i]);

   if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd,even];
}

pickIt([1,2,3,4,5,6,7,8,9,10]);

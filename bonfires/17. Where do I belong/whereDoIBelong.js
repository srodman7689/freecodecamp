function where(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if ( num > arr[i] && num < arr[i+1]) {
      return i+1;
    } else if (num == arr[i]) {
      return i;
    }
  }
}

where([40, 60], 50);
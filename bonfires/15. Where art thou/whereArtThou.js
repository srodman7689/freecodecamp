function where(collection, source) {
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    for (var key in source){
      console.log(key);
      if (collection[i].hasOwnProperty(key)) {
        if (collection[i][key] === source[key]) {
          arr.push(collection[i]);
        }
      }
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
function sym(args) {
  var arrs;
  arrs = Array.prototype.slice.apply(arguments).reduce(function(prev, cur) {
    cur.filter(function(val, idx, self) {
      return self.indexOf(val) === idx;
    }).map(function(elm) {
      var loc = prev.indexOf(elm);
      a = [loc !== -1 ? prev.splice(loc, 1) : prev.push(elm)];
    });
    return prev;
  }, []);
  return arrs;
}

sym([1, 2, 3], [5, 2, 1, 4]);

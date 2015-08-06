var Person = function(firstAndLast) {
  var names = firstAndLast.split(" ");
  this.getFullName = function() {
    return names.join(" ");
  };
  
  this.setFirstName = function(first) {
    names[0] = first;
  };
  
  this.getFirstName = function() {
    return names[0];
  };
  
  this.setLastName = function(last) {
    names[1] = last;
  };
  
  this.getLastName = function() {
    return names[1];
  };
  
  this.setFullName = function(firstAndLast) {
    names = firstAndLast.split(" ");
  };
};


var bob = new Person('Bob Ross');
bob.getFullName();
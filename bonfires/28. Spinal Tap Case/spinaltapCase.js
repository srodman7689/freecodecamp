function spinalCase(str) {
  return str.replace(/\-?([a-z])([A-Z]+)/g, '$1 $2').replace(/_/g, " ").split(" ").join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');

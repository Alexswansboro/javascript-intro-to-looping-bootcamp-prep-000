
function forLoop(array) {
for (i = 1; i < 26; i++) 
  if ( i === 1)
  { array.push("I am {i === 1} strange loop.")
  } else {
  array.push("I am ${i} strange loops."); }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--)
  }
 
 return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
 do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
}

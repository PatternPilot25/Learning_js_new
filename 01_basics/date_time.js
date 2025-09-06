// date and time are just object so there are lots of function for it ....
//  if we define each and every element in terms of an array in date & time than remeber it will take month of jan as 0 ...
let date = new Date();
console.log(date.toTimeString())
console.log(Date.now())
console.log(date.getTime())
console.log(date.getDate())
// The Date object in JavaScript provides many built-in methods for handling date and time.
// Note: Months are zero-indexed (January = 0, December = 11), which can be unintuitive.
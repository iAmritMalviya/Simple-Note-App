let arr = ['Hey', 'This', 'Array']

localStorage.setItem('Name' , 'Amrit')
// localStorage.setItem('array', (array))
let name = localStorage.getItem('Name')
let Aname = localStorage.getItem('array')
sessionStorage.setItem('session' , 'storage')
let name2 = typeof sessionStorage.getItem('session')

// localStorage.clear();  it clears local storage
// it returns string from localstorage, Not an array


// to set array in storage and can access array easily


// localStorage.clear()
// if you want to delete perticular item then
localStorage.removeItem('Name')
let array = ['Hey', 'There', 'ImAn array']
localStorage.setItem('Array', JSON.stringify(array))
let getarray = JSON.parse(localStorage.getItem('Array'))
console.log(getarray);


// retrun value is an object
// simple method to access whole array

// there is anoter method which is sessionstorgae



// json.parse()
// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.





// let ekarray =['me'];
// ekarray.push('heelo') // push ho chuka h, but you neeed to chage it into string. that where stringfy() comes
// console.log(ekarray);
// localStorage.setItem('localarray', JSON.stringify(ekarray))

// let dusrarray = JSON.parse(localStorage.getItem('localarray'))
// console.log(dusrarray);

// retrun value is an object
// simple method to access whole array

// there is anoter method which is sessionstorgae

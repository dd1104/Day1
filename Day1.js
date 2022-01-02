/typeof  -----> is a operator which returns: number, String, Boolean, undefined

let x=20
console.log(typeof x) // number
//y= -20
//console.log(typeof y) // number
//z= 2.6
//console.log(typeof z) // number

aa= "Deeksha"
console.log(typeof aa)// String

ii="H" 
console.log(typeof ii)// String---- Single char will also return string only

bb= true
console.log(typeof bb)// Boolean

let cc
console.log(typeof cc)// undefined

////STRING--->

let city= "pune"
//  0   1   2   3----- Index value-- always starts with 0 and last element---(length-1)
//  p   u   n   e

console.log(city[0])//p
console.log(city[1])//u

// Object --- property and method
// human --> object 
//property - age , weight , height , name
//method - walk(),talk()
// vehicle ---->object
// property --> register number ,color ,type
// methods --> start() , stop()

// Everything in js is object
// Object -- property and method

//Length---> Property
city="Gurgaon"
let yy= city.length
console.log(yy)//7
console.log(typeof yy)//number

// toUpperCase-- Method----converts every string character to upper case- returns string

let zz=city.toUpperCase()
console.log(zz)// GURGAON
console.log(typeof zz)//string

//toLowerCase-- Method----converts every string character to lower case- returns string

let Months= "April"
let hh=Months.toLowerCase()
console.log(hh)//april
console.log(typeof hh)//string

//Chaining method---> used to execute multiple methods in a single statement
//NOTE: during Chaining method if value is changed to number in between then Return value can never be String|| it will rreturn as 'undefined'

//      April-----APRIL--------april-------5
let mm= Months.toUpperCase().toLowerCase().length
// 0  1  2  3  4  
// A  p  r  i  l
console.log(mm) //5


// Indexof and lastIndexof()--- if indexOf[0]-- then it always return whole string
let Planet="Mercury"

// 0 1 2 3 4 5 6 7
// A t l a n t i c
let dd= Planet.indexOf('r')
console.log(dd)//
let gg= Planet.lastIndexOf('r')
console.log(gg)


 




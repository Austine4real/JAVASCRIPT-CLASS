// let key word
// let boy = 'austine'
// console.log(boy)
// document.write(boy)
// document.getElementById('las').innerHTML=boy
// let girl = 'Toyin'
// document.getElementById('lasop').innerHTML=girl

// boy = 'mama'
// console.log(boy)

// // we can use var key word to redecleared a value
// var club = 'chelsea'
// document.getElementById(con).innerHTML=club
// var club = 'liverpool'
// document.getElementById('pro').innerHTML=club

// /*once a const key word is used, it can not be used in any where in the code again*/
// const sub='maths'
// console.log(sub)

// // Data types
// // String

// string methods

        //  string concatination
let animal = 'what\'s is going on?'
document.getElementById('para').innerHTML= 
animal

// let firstName = 'Louis'
// let lastName = 'Louis'
// let car = 'mercedes'
// let sport = 'formula 1'
// let tornament = firstName + " " +  lasttName + " drive a" + " " + car + " Benz car in" + " " + sport + " race"
//  document.getElementById('las').innerHTML=tornament

    //  template literals

//     let firstName = 'Louis'
// let lastName = 'Louis'
// let car = 'mercedes'
// let sport = 'formula 1'
// let tornament = `${firstName} ${lastName} drives a ${car} benz car in ${sport} race`
// document.getElementById('las').innerHTML=tornament

// let footballClub = 'chelsea'
// let playerFirstname = 'Timo'
// let playerLastname = 'Werner'
// let play = `${playerFirstname} ${playerLastname} wear jersey Number 11 for ${footballClub}`
// document.getElementById('pro').innerHTML=play


// Number
// Boolean
// integer
// Float
// bigInt
// undefined
// null
// Array



// 1. typeOf

// let marraige = 'divorce'
// let state = typeof(marraige)
// console.log(state)

// let num = 23
// let nums=typeof(num)
// document.getElementById('lasop').innerHTML=nums

// let m = true
// let n=typeof(m)
// console.log(n)

// let toyin = typeof(a)
// console.log(toyin)

// document.getElementById('lasop').innerHTML='austin came late <br> but he will catch up'
// document.getElementById('las').innerHTML= playerFirstname + '<br>' + playerLastname

// finding the length of a string

school = 'lagos school of programming'
let call = school.length
console.log(call)

// let user=prompt('what is you name')
// alert('my name is ' +  user)

// document.getElementById('lasop').innerHTML='my name is ' + user

// console.log('my name is ' + user)

// let char=prompt('compose your tweet')
// let message='you have written ' + char +  ', you have ' + (200-char.length) + ' character remaining'
// document.getElementById('las').innerHTML=message

// retrieving a character from a word
let x = 'programming'
let y=x[10]
console.log(y)
let find=x.indexOf('m')
console.log(find)
 
// retrieving  a word from a string 

 let word = "where are they, where did they go?"
// let str = word.indexOf('they')
// console.log(str)

// let inner=word.lastIndexOf('they')
// console.log(inner)

// THE SEARCH METHOD
let data = word.search('where')
console.log(data)

// HOW TO SLICE A A STRING: it will only bring the word that exist between 10 and 19

let fox = 'The quick brown fox, jump over the lazy dog.'
let dog=fox.slice(10,19)
console.log(dog)

// slicing from the back use negative value
let back=fox.slice(-9,-1)
console.log(back)

// SUBSTRING METHOD the different between the substring method and slice method is that it does not take negative value

let app=fox.substring(10,19)
console.log(app)

// SUBSTR METHOD
cont = fox.substr(10,19)
console.log(cont)
dog=fox.slice(10)
console.log(dog)

// THE REPLACE METHOD

let feelings = 'i love lasop, lasop is nice'
let place=feelings.replace('lasop','everyone')
console.log(place)

// the small g is a regular expression
let reg=feelings.replace(/lasop/g,'everyone')
console.log(reg)

// CONVERTING STRING TO UPPER AND LOWER CASES
let ali='Distrubance'
console.log(ali)

let tayo=ali.toUpperCase()
    console.log(tayo)

    let tank=ali.toLowerCase()
    console.log(tank)

    // CONCAT METHOD
let dummy = 'lorem'
let add = dummy.concat(' ','Ipsum')
console.log(add)

let NAME = 'David'
let NAMES = NAME.concat(' ','Shuaib')
console.log(NAMES)

// INCLUDE METHOD

let prophet = 'Muhammed'
let ask=prophet.includes('g')
console.log(ask)

let asks=prophet.includes('a')
console.log(asks)

// NUMBER DATA TYPE
let c = 20;
let d = 2;
console.log(c)

let e = '10' * 2
console.log(e)

let f = '10' - 2
console.log(f)

let g = '10' + 2
console.log(g) //it is not applicable

// JS OPERANDS
console.log(40 + 2)
console.log(40 - 2)
console.log(40 * 2)
console.log(40 / 2)
console.log(40 / 3)
console.log(10 % 3)

// INCREEMENTAL METHOD
let likes = 7
likes++
likes++
console.log(likes)

likes--
console.log(likes)

likes+=2
likes+=100
console.log(likes)

likes-=50
console.log(likes)

likes*2
console.log(likes)

likes/=10
console.log(likes)

likes**=2
console.log(likes)

likes%=2
console.log(likes)

// COMPARISM OPERATORS = is assignment notation
//== is a weak equality, it only check for the value
//=== is a strong equality, it check both the value and the data type
//let h = 8;
let k = '5';
console.log(k=5)
console.log('5'==5)
console.log('5'===5)
console.log(k !=5)//not equal to
console.log(5>3)//greater than
console.log(5<3)//less than
console.log(5<=3)//less than or equal to
console.log(5>=3)//grater than or equal to

// LOGICAL OPERATOR
// And operator
console.log(3<5 && 4>2)//true
console.log(3<5 && 4>8)//false
console.log(7<5 && 4>8)//false

p=5
q=10
console.log(p>2 && q<11)//logical conjuction(ampersand)
console.log(p>5 && q<11)

// Or logic
console.log(p>7 || q<12)//logical disjuction(double pipe)
// Not logic
console.log(!(p>7))//logical negation(not)
console.log(!(p>5 || q<11))
console.log(!(p>5) && q<11)

// CONDITIONAL OPERATIONS

// if and else statement
let i=4;
let j=2;
if(j>i){
    console.log(`${j} is greater than ${i}`)
}
else{
    console.log(`${i} is greater than ${j}`)
}


// let age = prompt('how old are you')
// if(age<18){
//     console.log('You are too young to work here')
// }
// else if(age>=18 && age<=50){
//     console.log('You can for maximum hours')
// }
// else if(age>50 && age<=65){
//     console.log('You can work for part time')
// }
// else{
//     console.log('Get out,you are too old to be here')
// }


//let number = prompt('0  enter a number')
// if(number==='0'){
//     console.log(`${number} is not inclusive`)
// }
// else if(number % 2===0 && number % 3===0){
//     console.log(`${number} is divisible by 2 and 3`)
// }
// else if(number % 2===0){
//     console.log(`${number} is divisible by 2`)
// }
// else if(number % 3===0){
//     console.log(`${number} is divisible by 3`)
// }
// else{
//     console.log('Enter a valid number')
// }

// if(number%2===0){
//      console.log(`${number} is an even number`)
//  }
//  else{
//     console.log(`${number} is an odd number`)
//     }

// code=prompt('Enter your verification number')
// if(code.length===9){
//     console.log('your code is correct')
// }
// else{
//     console.log('Invalid code')
// }

    // TERNARY OPERATION
//     let scores=prompt('Enter your exam score')
//     result=(scores>=40)? 'passed': 'Failed'
// console.log(`You exam scores is ${scores}, you ${result}`)

// let age = prompt('enter your age')
// result=(age>=50)? 'You are old': 'You are young'
// console.log(`You are ${age} year old, ${result}`)


// SWITCH OPERATION
//let colors=prompt('enter your favorite color')
// let color=colors.toLowerCase()
// switch(colors){
//     case 'green':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     case 'yellow':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     case 'red':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     case 'black':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     case 'purple':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     case 'grey':
//     console.log(`you said your favarite color is ${color}`)
//     break
//     default:
//         console.log(`Your color ${color} is not here`)
// }

//ASSIGNMENT

/*Using prompt get the year the user was born and if the user is 18 or above allow the user to drive, if not tell the user to wait a certain amount of year*/
// let myAge = prompt("enter your age");
//  if(myAge >= 18){
//    console.log("old enough to drive")
//  }
//  else{
//    console.log(`you have ${18 - myAge} years left to drive`)
//  }

 /*Question 2: write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area= 0.5xbxh)*/
// let b = prompt('type base number')
// let h = prompt('type height number')
// let area = 0.5*b*h
// console.log(area)

/*Question 3: write a code which can give grades to students according to their scores: 80-100=A, 70-89=B, 60-69=C,50-59=D, 0-49=F,*/
// let studentScores = prompt('Enter student score')
// if(studentScores>=80){
//     console.log('you score A grade')
// }
// else if(studentScores<70){
//     console.log('you score B grade')
// }
// else if(studentScores>=60){
//     console.log('you score C grade')
// }
// else if(studentScores>=50){
//     console.log('you score D grade')
// }
// else {
//     console.log('you failed and fail out')
// }


// let month=prompt('Enter a month')
//  let months=month.toLowerCase()
//  switch(months){
//      case 'january':
//      console.log(`January has 31 day`)
//      break
//      case 'february':
//      console.log(`February has 28 day`)
//      break
//      case 'march':
//      console.log(`March has 31 day`)
//      break
//      case 'april':
//      console.log(`April has 31 day`)
//      break
//      case 'may':
//      console.log(`May has 31 day`)
//      break
//      case 'june':
//      console.log(`June has 31 day`)
//      break
//      case 'July':
//      console.log(`July has 31 day`)
//      break
//      case 'august':
//      console.log(`August has 31 day`)
//      break
//     default:
//         console.log(`show another month`)
//     }

    // CLASS CONTINUE 28/5/2022
    // a program that tell us the time, date and day
    let day;
    let now = new Date
    switch (now.getDay()) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednessday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
    
        default:
            break;
    }

    let dateAndTime = `Today is ${day}, and the date and time is ${now}`
    document.getElementById('lasop').innerHTML=dateAndTime

// a program that greet us according to the time of the day
    let master = 'David'
    let time = now.getHours()
    if(time>=00 && time<12){
        document.getElementById('las').innerHTML = `Good morning Mr ${master}`
    }
    else if (time>=12 && time<16){
        document.getElementById('las').innerHTML = `Good afternoon Mr ${master}`
    }
    else{
        document.getElementById('las').innerHTML = `Good evening Mr ${master}` 
    }
   
    // a program that can calculate the year a user was born

    // let user = prompt(`wgat year were you born?`)
    // let currentyear = (now.getFullYear())
    // console.log(currentyear)
    // agecalc=(currentyear - user)
    // if(agecalc>18){
    //     document.getElementById('para').innerHTML = `your age ${agecalc} is good for driving`
    // }
    // else{
    //     document.getElementById('para').innerHTML = `your age ${agecalc} is too young for driving` 
    // }

    // score=prompt('Enter exam score')
    // if(score>=0 && score <=100){
    //     if(score>=80 && score<=100){
    //         document.getElementById('lasop').innerHTML = `You had an 'A' in your exam`
    //     }
    //     else if(score>=70 && score<80){
    //         document.getElementById('lasop').innerHTML = `You had an 'B' in your exam`
    //     }
    //     else if(score>=60 && score<70){
    //         document.getElementById('lasop').innerHTML = `You had an 'C' in your exam`
    //     }
    //     else if(score>=50 && score<60){
    //         document.getElementById('lasop').innerHTML = `You had an 'D' in your exam`
    //     }
    //     else if(score>=40 && score<50){
    //         document.getElementById('lasop').innerHTML = `You had an 'F' in your exam`
    //     }
    // }
    // else{
    //     document.getElementById('lasop').innerHTML = `${score} is not a valid exam score. Enter the correct score`
    // }

var dt = new Date()
var month=dt.getMonth() + 1
var year=dt.getFullYear()
var daysInMonth=new Date(year,month,0).getDate()
console.log(daysInMonth)

// ARRAY
let colors = ['red','blue','orange','green']
console.log(colors)

let items=['red', 1, true, null,1.45]
console.log(items)

let color = new Array('man','woman','girl','boy')
console.log(color)

// Accessing item in an array by index
let mycolor = colors[3]
console.log(mycolor)

// Add and remove item from an array

// push method add item to the ending of an array
let cities=['Abuja','Berlin','Tokyo','Copenhaden']
cities.push('Accra','Madrid','Rome','Brussels')
console.log(cities)

// unshift add items to the begin of an array
colors.unshift('Indgo','Violet','Cyan','Mangenta')

// pop remove the last word of an array
cities.pop()
console.log(cities)

// shift remove the first word of an array
cities.shift()
console.log(cities)

// Concat join two sentence together
let dogs = ['Toyin','Adebayo','Kevin','Ugbodaga']
let cats =  ['Toyin1','Adebayo2','Kevin3','Ugbodaga4']
let arr = dogs.concat(cats)
console.log(arr)

// splice method add items to an array by specifying the position 
let sm = ['reddit','quora','whatsapp','stackoverflow','codepen']
sm.splice(1,0,'twitter','facebook','2go','tiktok','instagram')
console.log(sm)

let sim = ['reddit','quora','whatsapp','stackoverflow','codepen']
sim.splice(1,1,'twitter','facebook','2go','tiktok','instagram')
console.log(sim)

// slice
let sam =['reddit','quora','whatsapp','stackoverflow','codepen']
w = sam.slice(1,3)
console.log(w)

j=sam.slice(-3,-1)
console.log(j)

// join method
const fruit =['banana','orange','apple','mango']
let text = fruit.join(' ')
console.log(text)

let ban =['Banana' , 'Orange']
let bans=ban.join(' and ')

let apes=[' Apple','Mango']
let appes=apes.join(' with ')

let all=bans.concat(appes)
console.log(all)

// toString
const dange =['banana','orange','apple','mango']
console.log(dange)
let texts=dange.toString()
console.log(texts)

//  sort method
fruit.sort()
console.log(fruit)

// reverse method
fruit.reverse()
console.log(fruit)

// for number sorting ascending
let scores=[1,45,34,3,90,100,5,67]
scores.sort(function(a,b){return a-b})
console.log(scores)

// descending
scores.sort(function(a,b){return b-a})
console.log(scores.join(' '))

// MR ISACC CLASS START

let arry = [1,2,3,4,5,6,7]
console.log(arry)

let time1 = now.getHours()
    if(time1>=00 && time<12){
        console.log(`Good morning`)
    }
    else if (time1>=12 && time<16){
        console.log(`Good afternoon`)
    }
    else if (time1>=16 && time<19){
        console.log(`Good afternoon`)
    }
    else{
        console.log(`Good night`) 
    }

    // for Loop

//     for(let i =0; i <= 5; i++){
//         console.log('i')
//     }

    for(let i = 0; i<= 50; i++){
     if(i%3==0 && i%5==0){
            console.log(`${i} fizzbuzz`)
                   }
       else if(i%2==0){
    console.log(`${i} fizz`)
        }
       else{
        console.log(`${i} buzz `)
       }
        }
// converting to uppercase
 let classList = ['Kelvin', ' toyin', 'austine', 'adebayo']
 
for(let i = 0; i < classList.length; i++){
    if(classList[i].includes("isaac")){
        console.log('you belong here')
    }else{
        console.log('Regester')
    }
}

let array2 = [];
for(let i = 0; i < classList.length; i++){
array2.push(classList[i].toUpperCase())
}
console.log(array2)

let fruits =['banana','orange','apple','mango']
String = fruits.join(' ').toUpperCase();
console.log(String)
// for(leti=5;i>=0;1--){
//     console.log(i)
// }

        let even = 0
         let odd = 0
         let emptyArry = []
        for(let i = 0; i<= 50; i++){
            if(i%2==0){
                even += i
            }
            else{ odd += i
            }
         }
         emptyArry.push(even,odd)
        console.log(emptyArry)

for(i = 0; i<=5; i++){
    console.log("#".repeat(i))
    }
    
    for(i = 0; i<=10; i++){
     console.log(`${i} * ${i} = ${i * i}`);
    }
   
    // while loop
    //  let l = 0;
    //   while(l = 5){
    //      console.log(l)
    //       l++
    //  }

    // do while loop
    // let z = 0;
    // // do{console.log(z)
    // z++ 
    // }while (j<=5)

// class work
let countries = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'FINLAND','ETHIOPIA','GERMANY','ICELAND','IRELAND']
 let newCountries = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes("LAND")){
        newCountries.push(countries[i])
         }
    }
    console.log(newCountries)

    let countrynum = []
    for(let i = 0; i < countries.length; i++){
        countrynum.push(countries[i].length)
         }
        console.log(countrynum)
    

// object
let person = [
    {name:'Austine',
     sex:'male',
     state:'Edo'},

    {name:'Toyin',
     sex:'female',
     state:'Osun'},

    {name:'Adebayo',
     sex:'male',
     state:'oyo'}
]
console.log(person[0].name)
console.log(person[1].name)
console.log(`Mr ${person[0].name} is from ${person[0].state } state`)


let emptyObject = {}
console.log(emptyObject)

class Person{
   constructor(name, sex, state, year, color,height){
       this.name = name
       this.sex = sex
       this.state = state
       this.year = year
       this.color = color
       this.height = height
   }
   getPersonState(){
       return `${this.name} is from ${this.state} state`
   }
getPersonAge(){
    let age = new Date().getFullYear() - this.year
    return age
}
getPersonSkiinColor(){
    return `${this.name} is ${this.color}`
}
getPersonHeight(){
    let height = `${this.name} is a ${this.sex} from ${this.state}, he is ${new Date().getFullYear() - this.year} and he is very ${this.color} and ${this.height}.`
    return height
}
}


let person1 = new Person('Austine','male','Edo',2000)

console.log(person1.getPersonAge())

let person2 = new Person('Isaac','male','Oyo', 1985, 'black')

console.log(person2.getPersonSkiinColor())

let person3 = new Person('Klvin','male','Delta',1978,'yellow','tall')

console.log(person3.getPersonHeight())

let get = new Date()
let future = new Date('june 30,2022')
console.log(future - get)

// FUNCTIONS

function countrylength(){
    let countrynum = []
    for(let i = 0; i < countries.length; i++){
        countrynum.push(countries[i].length)
         }
        console.log(countrynum)
    
}
countrylength()

function  multiple(){
    let A=8
    let B= 10
    let C = A*B
    console.log(C)
}
multiple()

function multiple1(a){
    let mul = a * 9
    console.log(mul)
}
multiple1(2)
multiple1(6)

function multiple2(a,b){
    let result = a * b
    return result
}
console.log(multiple2(5,6))
console.log(multiple2(8,6))
console.log(multiple2(5,7))

const number = [1,4,6,8,9,20,21,22,23,24,25]
const number1 = [3,4,6,1]
function sumMulNum(args) {
     let sum = 0
    for(i = 0; i<args.length; i++){
        sum += args[i]
       }
     return sum 
}
console.log(sumMulNum(number))
// console.log(sumMulNum(number1))



function sumNum() {
    let sum = 0
    for(i = 0; i<arguments.length; i++){
        sum += arguments[i]
       }     
       return sum 
}
console.log(sumNum(2,5,5,4,5))
console.log(sumNum(67,4,50))
console.log(sumNum(21,32,44,5))

// types of functions
function fool(){
    console.log('function declaration')
}

const MultipleNum=()=>{
    console.log(' arrowfunction') 
}

let multiple3 = function(){
    console.log(' anonymous function i.e function without name')
}

let  squaredNum = (function(n){
    console.log('self invoking function')
    return n * n
})(10)
console.log(squaredNum)

let emtyCount = []
for(let i=0; i<countrylength.length; i++){
    emtyCount.push(county[i].length)}

    // Under Mat Objects
    //Math.random()
    console.log(Math.random())
    console.log(Math.random()*6)
   // Math.round()

    let num5 = Math.random()*100
    console.log(num5)
    console.log(Math.round(num5))

    console.log(Math.round(3.674646778))
   // Math.floor()//round down
    console.log(Math.floor(2.9674646778))

   // Math.ceil()//round up
    console.log(Math.ceil(2.0674646778))

    //Math.min()
    console.log(Math.min(4,5,2,76,8,0,8))
   // Math.max()
    console.log(Math.max(4,5,2,76,8,0,8))

   // tofixed()
   let fixed = Math.random()*6
   console.log(fixed.toFixed(3))
// function getEmtyArray{
//    let emtyArray = []
//    for(let i = 0; i<=5;i++){
//        if(emtyArray.length < i){
//            let randomNum = Math.floor(Math.random()*10)+1
//            emtyArray.push(randomNum)
//        }
//    }
//    console.log(getEmtyArray(emptyArry))
// }
   for(let i =1; i <= 10; i++){
       console.log(`${i}. we will not be let to class tomorrow`)
   }

   

   //higher order function
   //callback

   const rand =[4,6,43,46,1,3,5,22,27,20,15,14,19]
   console.log(rand.sort(function(a,b){return a-b}))
   console.log(rand.sort(function(a,b){return b-a}))

//    function sayHello(){
//        console.log(`say Hello`)
//    }
//    setInterval(sayHello, 1000)

//    function sayHello2(){
//        alert(`This function is going to be call 5second after the widow loads`)
//    }
//    setTimeout(sayHello2, 5000)
   
   //setInterval(ratio,1000) same as

//    setInterval(function(){console.log(`This is an example of callback function`)})

//  const ratio=()=>{console.log(`This is an example of callback function`)})

// function getRandNum(){
//     let emtyArray = []
//    for(let i = 0; i<=5;i++){
//        if(emtyArray.length < i){
//            let randomNum = Math.floor(Math.random()*10)+1
//            emtyArray.push(randomNum)
//        }
//    }
//    console.log(emtyArray)
// }
// setInterval(getRandNum,10000)

//forEach
const arrNum = [4,2,3,4,5,10,7]
arrNum.forEach((el)=>{console.log(el)*2})
console.log(arrNum)

countries.forEach((itr)=>{console.log(itr.toLocaleLowerCase())})

//.map()
let newList = arrNum.map((itr)=>{return itr * 2})
console.log(newList)

let newList2 = countries.map((itr)=>{return itr.toLowerCase()})
console.log(newList2)
console.log(countries)

//filter

const personData = [
    {name: 'Bucky Roberts', age: 30},
    {name: 'Tylor Swift', age: 13},
    {name: 'Abdulahi A.', age: 18},
    {name: 'Ezekiel Aja', age: 50},
    {name: 'Okon Lemuella', age: 15},
    {name: 'Don Richie', age: 5},
]

let result = personData.filter((itr)=>{return itr.age >= 18})
console.log(result)

let newList3 = countries.filter((itr)=>{return itr.length===6})
console.log(newList3)

// let qualifiedApp = applicants.filter((itr)=>{
//     return itr.favourite_color==='white' && itr.age >= 20
// })
// console.log(qualifiedApp)
      
       //ASSIGNMENT

// Generate a list(15) of random number
 let emtArray = []
   for(let i = 0; i<=15;i++){
       if(emtArray.length < i){
           let randomNum = Math.floor(Math.random()*50)+1
           emtArray.push(randomNum)
       }
   }
   console.log(emtArray)

    // filter out odd numbers from the list

   let filterOdd = emtArray.filter((itr)=>{
       return itr % 2 !== 0
   })
   console.log(filterOdd)

    // filter out even numbers from the list
   let filterEven = emtArray.filter(itr => itr % 2==0)
   console.log(filterEven)

 // get the sum of all even numbers
let sumEven = 0
for (let i = 0; i < emtArray.length; i++){
    if(emtArray[i] % 2 == 0){
        sumEven += emtArray[i]
    }
}
console.log(sumEven)

// get the sum of the array
let arraySum = 0
for(let i = 0; i < emtArray.length; i++){
    arraySum += emtArray[i]
}
console.log(arraySum)

 // sort the array 
 let newEmtArray = emtArray.slice()
 newEmtArray.sort(function(a,b){return a-b})
 console.log(newEmtArray)

   // find the min age

console.log(Math.min(...newEmtArray))

  //find the max age 

  console.log(Math.max(...newEmtArray))

  // multiply the each element of the array by 2 and get the sum of the new array

  let arrayMultiple = emtArray.map((mul)=>{return mul * 2})
  console.log(arrayMultiple)

  let sumMulNum2 = 0
  for(let i = 0; i < arrayMultiple.length;i++){
      sumMulNum2 += arrayMultiple[i]
  }
  console.log(sumMulNum2)

//   destructuring and spread operator

const student2 = ['adebayo', 'toyin','austine','kelvin']
console.log(student2[3])

const [stud1, stud2, stud3, stud4] = student2
console.log(stud3)

const[stud, ...rest] = student2
console.log(stud)
console.log(...rest)



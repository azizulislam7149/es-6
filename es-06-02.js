const person = [{name : 'Aziz', age : " 36" , profession : 'teacher'},{moriom : 'my pakhi', age: 28, child: 'two'}];
console .log(person[1].moriom);

const numbers = [2,3,4,5];
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);

const number1 = [3,56,798,8970,42];
const double1 = (d)=> d *3;
const output = number1.map(double1);
console.log(output);
const number2 = [7, 8, 0, 67];
const output2 = number2.map(item => item + 7)
console.log(output2);

const friends = ['Aziz','Hafiz','Sakib', 'tima', 'lima'];
const length = friends.map(len=>len.length);
console.log(length);
const oddsFriends = friends.filter(odds =>odds.length % 2 ===0 )
console.log(oddsFriends);
const firstLetter = friends.map(first=>first[0]);
console.log(firstLetter);
const number3 = [23,76,98,543,4];
const result = number3.forEach(item => console.log(item));
const selected = number3.filter(select=>select  > 50);
const selected1 = number3.filter(select=>select  % 2 === 1);
const selected2 = number3.find(select=>select  % 2 === 1);
console.log(selected);
console.log(selected1);
console.log(selected2);

const number4 = [12,32,54,65,89];
const sum = number4.reduce((previous, current)=>previous + current, 0)
const sum1 = number4.reduce((previous, current)=>{
    const sum = previous + current;
    const len =  number4 .length
    const average = sum / len; 
    return average;
}, 0)

console.log('find out average ',sum1);
const produtcs = [
    {id: 1,  name : 'dell', price: 45000},
    {id: 2,  name : 'mac', price: 60000},
    {id: 3,  name : 'hp', price: 65000},
];
const names = produtcs.map(p=>p.name)
console.log(names);
produtcs.forEach(p=> console.log(p.price))
const id = produtcs.filter(p=> p.price > 50000)
const id1 = produtcs.filter(p=> p.price < 50000)
const id2 = produtcs.find(p=> p.price < 50000)
console.log(id);
console.log(id1);
console.log(id2);
const total = produtcs.reduce((acum,current)=> acum + current.price,0)
console.log(total);

let array = [21,43,67,87,0,54,54,76,45,76,65];
for(let i = 0; i<= array.length; i++){
    console.log(array[i]);
}

const person1 = {
    name: 'kodom ali ',
    job: 'badam bikre kora'
}
console.log(person1['job'])
const kg = 16 * 15;
console.log(kg)

// practice task 1
let data = {
    shopia: { 
        id: 33,
        study :[
           {
            primari :[
                {schoolName : 'Abc primary school'},
                {location : 'peters burg'},
            ]
           },
           {
            secondary:[
                {schoolName : 'abc primary school'},
                {location : 'St lorence'}
            ]
           }
            
        ]
    }
};
console.log(data.shopia.study[1].secondary[1].location);

let students = {
    2222 :{
        name: 'jack ',
        section :'c',
        class : '1X',
        address:{
            'building no': 12,
            'street' : 'st jonson',
            'ciyr' : 'petersburg',
            'country' :'uk'

        }
    },
    3333 :{
        name: 'herry ',
        section :'c',
        class : '1X',
        address:{
            'building no': 12,
            'street' : 'st jonson',
            'ciyr' : 'petersburg',
            'country' :'uk'

        }
    }
}
console.log(students['3333'].name)
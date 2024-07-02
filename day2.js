const days =['sunday','monday','tuesday','wednesday']
// console.log(days[2])

// days.push('Thursday')
// days.pop()
// days.unshift('hello')
// days.shift()

// const data =days.slice(1,4)
// console.log(data)
 
// days.splice(1,1,'haha')
// console.log(days)

// days.splice(3,1,'bye')
// console.log(days)

// const data =[1,2,3,4,5,6]

// data.splice(1,3,'hello','bye','world')
//  console.log(data)

//  const vowels =['m','a','n','i','s','h']

//  vowels.splice(0,6,'13','1','14','9','19','8')
//  console.log(vowels)

//  const text ='I am from Nepal'
//  const SplittedData = text.split(" ")
//  console.log(SplittedData)

//  const languages= ['js','php','c']

//  languages.splice(1,0,'html')
//  console.log(languages)


// var name ='manish'
// function greet(){
//     console.log("hello manish")
// }



const person = Object.freeze({
    name: "Manish",
    address : "Itahari",
    nationality : "Nepali" 
})
// console.log(person.address)
// console.log(person['address'])

// person.age = 22
// person.haha = "hehe"
// console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))

const datas =({
    name: ['manish','pranjal']
})
 datas.name.push('sanjiv')
 console.log(datas)










 const test =[
    {
        name:"manish"
    },
    {
        name:"pranjal"
    }
 ]

 test.push({name:'sanjiv'})
 console.log(test)


 const test2 ={
    name:['manish','pranjal','sanjiv']
 }

 test2.name.splice(0,3,'1','2','3')
 console.log(test2)






// const fruits = ["mango","apple","orange"]
// fruits.forEach(function(fruits){
//     console.log(fruits)
// })

// // output-square of nums
// const nums = [1,2,3,4,5]
// const squares = []
// nums.forEach(function(nums){
//     squares.push(nums*nums)
// })
// console.log(squares)

// // to print firstname + lastname
 const data = [
    {
         firstname : "eli",
         lastname :  "tamang",
         address : "dharan"
     },
    {
        firstname :  "anjila",
         lastname : "lama",
        address : "dharan"
    },
    {
         firstname : "jay",
         lastname : "sharma",
         address : "dharan"
     },
 ]
 const output = data.map((object)=>{
    return{
        ...object,
        fullname : object.firstname + " " + object.lastname
    }
 })
 console.log(output)
// data.forEach(function(data){
//     console.log(data.firstname + " " + data.lastname)
// }
// )
// const result = data.map((object)=>{
//     return{
//         fullname : object.firstname + " " + object.lastname
//     }
// })
// console.log(result)

// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{
//     return num*num
// })
// console.log(nums2)
// console.log(squared)

const numbers = [1,2,3,4,5]

const results = numbers.map((object)=>{
    return {
        text : 'A',
        number : object
    }

})
console.log(results)

const numberdata =  [1,2,3,4,5,6,7,8,9,10]
const oddnumbers = numberdata.filter((number)=>{
    return number%2 !== 0 
})
console.log(oddnumbers)

//output [6,7,8,9,10]
const leftnumber = numberdata.filter((number)=>{
    return number>5
})
console.log(leftnumber)

const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]
const leftbook = books.filter((number)=>{
    return number.publishedAt > 2000
})
console.log(leftbook)

const files =  ["index.html","app.js","app.java","style.css","test.js"]
//output ["app.js","test.js"]
const language = files.filter((files)=>{
    return files.includes(".js")
})
console.log(language)

const lasttask = [1,2,null,undefined,"eli","jp","haha"]
const eli =  lasttask.filter((jay)=>{
    return jay !== null && jay !== undefined

})
console.log(eli)

const datas = 
[
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]
const student = datas.filter((std)=>{
    return std.marks > 500 && std.status == "pass" && std.name.endsWith("sh")
})
console.log(student)
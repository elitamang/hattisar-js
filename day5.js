const num =  [1,2,3,4,5]
const sum =  num.reduce((accumulator,num)=>{
    return num + accumulator
},2)
console.log(sum)

const products = [
    {
        product : 'A',
        price : 200,
        qty : 2
    },
    {
        product : 'B',
        price : 300,
        qty : 7
    },
    {
        product : 'A',
        price : 1100,
        qty : 8
    }
]
const total =  products.reduce((accumulator,num)=>{
     return accumulator + (num.price*num.qty) 
},0)
console.log(total)

const output =  products.reduce((acc,product)=>{
    acc.total = product.price * product.qty + acc.total
    acc.totalqty = product.qty + acc.totalqty
    return acc
},({total : 0,totalqty : 0}))
console.log(output)

const reviews =  [
    {
        rating : 2
    },
    { 
        rating : 4
    },
    {
        rating : 5
    },
]
function results(reviews){
const totalRating =  reviews.reduce((acc,review)=>{
    return acc+review.rating
},0)
const averagerating = totalRating/reviews.length
console.log(averagerating)
}
results(reviews)


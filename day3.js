const isRaining = true

if(isRaining){
    console.log("carry umbrella")

}else{
console.log("dont carry umbrella")
}
//temporary operator
//const result = isRaining ? "carry umbrella" : "don't carry umbrella"
//console.log(result)

//isRaining && console.log("carry umbrella")

//const age = "21"
//if(age === 21){
  //  console.log("age equals 21")
//} else{
  //  console.log("Age doesn't equal 21")
//}

const temperature = 27
if (temperature > 30){
    console.log("hot")
}
else if(temperature >20){
    console.log("moderate")
}else {
    console.log("cool")
}

const grade = 75
if(grade > 80){
    console.log("A")
}
else if(grade > 70){
    console.log("B+")
}
else if(grade > 60){
    console.log("B")
}
else{
    console.log("fail")
}

const days = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']
for(var i = 0; i < days.length;i++){
    console.log(days[i])
}


const numbers = [1,2,3,4,5];
function sumarray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
const sum = sumarray(numbers);
console.log("the sum of numbers is :",sum);


const info = {
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}
function haha(info){
    console.log(info.code[0].userId)
    console.log(info.code[0].title)
    console.log(info.code[0].ipAddress)
} 
haha(info)




 
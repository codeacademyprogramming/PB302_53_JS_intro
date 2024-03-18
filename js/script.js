let age = 15;







function sum1(num1,num2){
    let result =  num1+num2;
    alert(result)
}

let sum2 = function(num1,num2){alert(num1+num2)}
let sum3=sum1;

sum1(19,40)
sum2(40,56)

let sum4 = (x,y)=>alert(x+y);

sum4(10,45);    


//1. Verilmis ededi kvadratina yukseldib qaytaran function

function square1(num){
    return num*num;
}

let square2 = x=>x*x;

console.log(square1(5)) //=25
console.log(square2(5)) //=25

//2.Verilmis N ededinin  verilmis M quvvete yukseldib qaytaran function

function pow(n,m){
    let result=1;
    for(let i=0;i<m;i++){
        result*=n;
    }

    return result;
}

console.log(pow(4,5))

//3. Verilmis ededler siyahahsindaki cut ededlerin ededi ortasini hesablayan function
function sumEvenAvg(numbers){
    let count=0;
    let sum=0;

    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            count++;
            sum+=numbers[i]
        }
    }

    return sum/count
}

let arr = [10,4,5,3,2]
console.log(sumEvenAvg([10,4,5,3,2]))
console.log(sumEvenAvg(arr))

//4. Verilmis ededler siyahisindaki cut ededlerden ibaret yeni bir array qaytaran function

function createNewArr(arr){
    let newArr = [];
    let index = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            newArr[index++] = arr[i];
        }
    }
    return newArr;
}

var evenNumbers = createNewArr([10,3,5,14,87,65,78])
console.log("Even numbers:")
console.log(evenNumbers)
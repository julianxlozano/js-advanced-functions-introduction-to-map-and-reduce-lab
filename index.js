// Your code here

function mapToNegativize(array){
    let newArray = [];
    for (let i = 0;i<array.length;i++){
        newArray.push(array[i] * -1) 
    };
    return newArray
};

function mapToNoChange(array){
    return array
};

function mapToDouble(array){
    let newArray = [];
    for (let i = 0;i<array.length;i++){
        newArray.push(array[i] * 2) 
    };
    return newArray
};

function mapToSquare(array){
    let newArray = [];
    for (let i = 0;i<array.length;i++){
        newArray.push(array[i] * array[i]) 
    };
    return newArray
};

function reduceToTotal(array,int=0){
    let accumulator = int
    for (let i = 0;i<array.length;i++){
       accumulator += array[i]
    };
    return accumulator
};

function reduceToAllTrue(array){
   return (array.includes(false) ? false : true);
};

function reduceToAnyTrue(array){
    return (array.includes(true) ? true : false);
 };


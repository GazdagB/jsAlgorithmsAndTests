function countCharacters(string){
   
   console.log(string.length);
    
    return string.length;
}

function sumUpOdds(array){
    let result = 0;
    for(let i =0; i < array.length; i++){
        if(array[i] %2 !== 0){
            result += array[i]            
        }
    }
    console.log(result);
    return result;   
}

function createArrayOfNumbers(start,end){
 
    let result = []

    if(start < end){
        for(let i = start; i < end; i++){
        result.push(i);
        }
    }else if(start > end){
        for(let i = start; i >= end; i--){
        result.push(i);
        }
    }
   
    console.log(result);
    
    return result;
}



module.exports = {createArrayOfNumbers, sumUpOdds, countCharacters};
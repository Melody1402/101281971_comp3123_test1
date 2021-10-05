
const mixedArray = ['PIZZA',10,true,25,false,'Wings'];

function lowerCaseWords(arr) {

    return new Promise((resolve,reject) => {

        if(arr.filter(element => typeof element === 'string')){

            resolve(arr.filter(element => typeof element === 'string').map(element => element.toLowerCase()));
        }
        else{
            reject(`There is no strings in this array!`);
        }
    })

}

lowerCaseWords(mixedArray)
.then((msg) => console.log(msg))
.catch((msg)=>console.log(msg));

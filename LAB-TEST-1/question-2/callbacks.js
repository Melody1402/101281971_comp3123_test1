const resolvedPromise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = {'message':'delayed success!'};
        resolve(success);
    }, 500) 

}) 

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        let error = {'error':'delayed exception!'};
        reject(error);
    }, 500) 

}) 

resolvedPromise.then((msg) => console.log(msg));
rejectedPromise.catch((msg) => console.log(msg))





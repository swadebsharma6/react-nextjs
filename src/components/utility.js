export const submitForm =(answer) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(answer.toLowerCase() === 'dhaka'){
                resolve();
            }else{
                reject(new Error('Good Guses but a Wrong Answer, Try Again!!'))
            }
        }, 3000)
    })
}
const resolvedPromise =  () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({message: "Delayed Success!"})
        }, 500)
    })
}


const rejectedPromise =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error("Error: Delayed exception")
            } catch {
                reject({error: "Delayed Exception"})
            }
        },  500)
    })
}


let promiseResult = resolvedPromise().then(result => { console.log(result) })

promiseResult = rejectedPromise().catch(e => console.log(e))
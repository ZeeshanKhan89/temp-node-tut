const {readFile} = request('fs')

console.log ('start a first task')

readfile('./content/first.txt', 'utf8', (err, result) =>
{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete first task')

})
console.log('starting next task')
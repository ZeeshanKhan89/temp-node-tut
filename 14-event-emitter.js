const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with user id:${id}`)

})
customEmitter.on('response', () => {
    console.log(`some other logics are here`)

})

customEmitter.emit('response', 'Zee', '26')
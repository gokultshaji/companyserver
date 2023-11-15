// import json server
const jsonserver=require('json-server')
//import cors
const cors=require('cors')

// create json server
const server=jsonserver.create()

//json type data-js data-before request resolve
const middleware=jsonserver.defaults()

//create router
const router=jsonserver.router('db.json')

//apply in server
server.use(middleware)
server.use(cors())
server.use(router)


//set port
const PORT=3000
server.listen(PORT,()=>{
    console.log(`____json server started At port: ${PORT}__________`);
})
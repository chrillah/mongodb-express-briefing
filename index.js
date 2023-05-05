import { MongoClient } from 'mongodb'

import express from 'express'

const app = express()

const client = new MongoClient('mongodb://localhost:27017/'),
users = client.db('test').collection('users')




await users.insertOne({
    address: {
      city: 'Köpenhamn',
      street: 'Fulgatan 1',
      zipCode: 12345
    },
    firstName: 'Johanna',
    registered: new Date('2023-01-14T15:41:20.000Z'),
    surname: 'Dopesson'
  })

  console.log('Dokumentet har lagts in!')


// app.get('/', async (request, response) =>{
//     response.send(await users.find().toArray())
// })

// app.get('/', (req, res)=>{
//     res.send('FUCK')
// })

// app.listen(8080, ()=>{
//     console.log('Its On')
// })

// await users.insertOne({
//     address : {
//         city : 'Stockholm',
//         street : 'Kåkbrinken',
//         zipCode : '111 49'
//     },
//     firstName : 'Chris',
//     registered : new Date(),
//     surname : 'Surnamn'
// })

// console.log('Ny dokument tillagd')

// const result = await users.find({ 'address.city': 'Göteborg' }).toArray()

// console.log(result)

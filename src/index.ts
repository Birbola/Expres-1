import { CallTracker } from 'assert'
import express, { response } from 'express'

// create instence
const app = express()

app.get('/olimjon' , (require , response) => {
    response.sendFile('olimtoy.html' , { root: "./pages"})
})

app.get('/javohir' , (require , response) => {
    response.sendFile('javohirjon.html' , { root: "./pages"})
})

app.get('/note' , (require , response) => {
    response.sendFile('note140.html' , { root: "./pages"})
})

app.listen(8080 , () => {
    console.log('Server ishga tushdi . http://localhost:8080');
})
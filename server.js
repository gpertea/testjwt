require('dotenv').config() //to read the .env file

const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

const posts = [
    { username: 'Kyle', title:"Post 1"  },
    { username: 'Geo',  title:"Post 2"  }
]



app.get('/posts', (req, res) => {
 res.json(posts)
})


app.post('/login', (req, res) => {
    // Authenticate
   const username = req.body.username
   const user = { name : username }
   // sign with token from .env
   // tokens were generated with 
   //    require('crypto').randomBytes(64).toString('hex')
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
   res.json({ accessToken: accessToken })
})

app.listen(3000)
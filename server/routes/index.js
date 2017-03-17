const express = require('express')

const base = express.Router()

base.get('/', (req,res) => {
	res.send(`This is ${__dirname}`)
})
base.get('*', (req,res) => {
	res.send('Sry my dood, dis a 404 error')
})

module.exports = base

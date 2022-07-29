import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => res.json([
    {
        name: 'Nati malkiel',
        email: 'nati.malkiel@gmail.com'
    },
    {   
        name: 'moshe malkiel',
        email: 'moshe.malkiel@walla.com'
    },
    {   
        name: 'lima malkiel',
        email: 'lima.malkiel@gmail.com'
    }
]))

app.listen(PORT, () => {
    console.log('web server is listening at port ${PORT}')
})
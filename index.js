const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
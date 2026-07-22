import 'dotenv/config'

import app from './app.js'

const PORT = process.env.PORT || 3001 

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`)
})

app.on('error',(err) => {
    console.error(`Error: ${err.message}`)
})



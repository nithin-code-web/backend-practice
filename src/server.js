import app from './app.js'
import env from './config/env.js'
import connectDB from './config/db.js'

const PORT = env.PORT

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(`Error: ${err.message}`)
        process.exit(1)
    })



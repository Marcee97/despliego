import express from "express";
import router from "./routes/app.routes.js";
import cors from "cors";
import { PORT, ORIGIN} from "./config.js";
const app = express()

app.listen(PORT)
console.log(`http://localhost:${PORT}`)

app.use(cors({
    origin: ORIGIN
}))
app.use(router)


app.get('/', (req, res) => {
    res.send('Lioel messi el get del index')
})
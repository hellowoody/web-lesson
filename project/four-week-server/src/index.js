import express from "express"
import {useRouter} from "./router.js"

const app = express();
app.use(express.json()) 
app.use("/assets",express.static("./static"))
const port = 3000

useRouter(app)

app.listen(3000,() => console.log(`four-week-server is running,listening port ${port}... `))
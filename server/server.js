import app from "./src/app.js";

const port = 9008;//chaning for now

app.listen(port, () => {
    console.log(`Server running at ${[port]}`)
});
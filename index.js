const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => {
    console.log(`app listning to https://localhost: ${port}`)
})
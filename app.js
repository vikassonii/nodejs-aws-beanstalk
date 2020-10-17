const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello from nodejs");
});

app.get('/api/users', (req, res) => {
    res.json([{
        'name': 'Vikas',
        'city': 'Noida'
    },
    {
        'name': 'Michel',
        'city': 'Gurugram'
    }]);
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("listening to port", port);
})
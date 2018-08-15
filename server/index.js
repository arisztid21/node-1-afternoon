const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mC = require('./controller/messages_controller');
app.use(bodyParser.json());

app.post('/api/messages', mC.create);

app.get('/api/messages', mC.read);

app.put('/api/messages/:id', mC.update);

app.delete('/api/messages/:id', mC.delete);



const port = 3000;
app.listen(port, ()=>console.log(`server listening on port ${port}`))

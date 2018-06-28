let express = require('express');
let bodyParser = require('body-parser');

const mC = require('./controllers/messages_controller');
const app = express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );


app.post(`/api/messages`, mC.create);

app.get(`/api/messages`, mC.read);

app.put(`/api/messages/:id`, mC.update);

app.delete(`/api/messages/:id`, mC.delete);

const port = 3000
app.listen(port,()=>console.log(`now listening on port ${port}`))


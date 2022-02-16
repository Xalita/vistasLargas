const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require ('cors');

app.use(bodyParser.json());
app.use(cors());

app.post ('/mail', (req,res) => {
  const {name} = req.body;
  const {msg} = req.body;

  console.log (name);
  console.log (msg);

   if (error) {
     console.log ('error: ', error)
   } else {
    console.log ('sucess');

     res.json({
       name: name,
       msg: msg
     });
   }


})

app.listen(port, ()=> {
  console.log ('Está na porta ', port)
})

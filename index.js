const express = require('express');
const { connecter, connectDB } = require('./db/connect');
const routeruser = require('./routes/user')
const routerStudent = require('./routes/student')
const routerProf = require('./routes/prof')
const routerClasse = require('./routes/classe')
const routerEvals = require('./routes/evaluation')
const routerDepartement = require('./routes/departement')
const {router7} = require('./routes/notes')
const { authRouter } = require('./routes/auth')
const app = express();
const Port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors({
     origin: '*'
}));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
 

app.use("/api/v1", routeruser,routerDepartement,authRouter);
app.use("/api/v1", routerStudent);
app.use("/api/v1", routerProf);
app.use("/api/v1", routerClasse)
app.use("/api/v1", routerEvals)
app.use("/api/v1", router7)
app.use(/.*/, (req,res) => res.sendFile(__dirname + '/beninedu/dist/index.html') )
connectDB();
// connecter("mongodb://127.0.0.1:27017/", (erreur) => {
//      if (erreur) {
//           console.log("erreur lors de la connexion à la base de donnees");
//           process.exit(-1);
//      }else{
//           console.log("connexion établie");
//           app.listen(port);
//           console.log('attente de requette au port ' + Port);
//      }
// })

app.listen(Port, () => console.log('Le serveur a démaré au port' + Port));
app.get("/.*",(req,res) => res.sendFile(__dirname + '/beninedu/index.html'));
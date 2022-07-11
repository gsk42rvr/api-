const { MongoClient, Db } = require('mongodb')
const mongoose = require('mongoose');
var client = null;      

const URI = "mongodb+srv://yadrien5:Adrien2001%40@atlascluster.ehbag.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    client = await new MongoClient(URI);
    console.log('db connected..!');
}
function connecter(url,callback){
    if(client == null){
        client = new MongoClient(url);

        client.connect((erreur) => {
            if(erreur){
                client = null;
                callback(erreur);
            }else{
                callback();
            }
        })
    }else{
        callback();
    }
}

function bd(){
    return new Db(client, "GSK420");
}

function fermerConnexion(){
    if(client){
        client.close();
        client = null;
    }
}

module.exports = {connecter, bd, fermerConnexion,connectDB}
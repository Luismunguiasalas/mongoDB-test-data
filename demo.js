
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Lm:<password>@cluster0.s5jv9qb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




// const { MongoClient } = require('mongodb');

// async function main() {
//   // get the URI from mondodb atlas UI
//   const uri = "mongodb+srv://Lm:gjgcHTdcB4PjU6u4f@cluster0.s5jv9qb.mongodb.net/?retryWrites=true&w=majority";
//   // create the client object via MongoClient
//   const client = new MongoClient(uri);
//   // connect to the database server
//   // log any errors
//   try {
//     await client.connect();

//   } catch (e) {
//     console.log('errorrrrrrr')
//     console.log(e);
//   } finally {
//     client.close();
//   }
// }

// main().catch(console.error);
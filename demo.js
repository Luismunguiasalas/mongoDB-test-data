//  create 
const { MongoClient } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function main() {
  const uri = "mongodb+srv://Lm:demo123@cluster0.7xa5pvk.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
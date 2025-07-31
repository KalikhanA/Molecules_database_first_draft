// mongodb.js

import { MongoClient } from 'mongodb'

const uri = "mongodb://localhost:27017"

let client  

client = new MongoClient(uri)
let clientPromise = client.connect()

export default clientPromise
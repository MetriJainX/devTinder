// const mongoose=require("mongoose");
// const connect=async()=>{
// await mongoose.connect(
//     "mongodb+srv://jainmetrii_db_user:srBNzIs3QLmY5Z0Q@cluster0.irnoaye.mongodb.net/helloWorld"
// );
// };
// connectDb().then(()=>{
//    console.log("database connection established");
// })
// .catch((err)=>{
//    console.error("database cant be connected");
// });

// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected!');
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//         process.exit(1); // Exit if DB connection fails
//     }
// };

// module.exports = connectDb;



const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jainmetrii_db_user:anQpmEuAolbPeHgw@cluster0.irnoaye.mongodb.net/devTinder",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connection established!");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit if DB connection fails
  }
};

// Call the function immediately (same as Namaste Node.js)
connectDb();

module.exports = connectDb;
// mongodb+srv://jainmetrii_db_user:qfubpshcGQjhtivz@cluster0.irnoaye.mongodb.net/devTinder
const mongoose = require('mongoose');
const config = require('config');
mongoose.set('strictQuery', false);

// const URI = config.get('mongoURI');
const mongoURI = "mongodb+srv://GoFood:" + encodeURIComponent("GoFood@*#123") + "@cluster0.iimqrld.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true, useNewUrlParser: true});
      console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

module.exports = mongoDB;
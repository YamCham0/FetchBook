const mongoose = require('mongoose');

mongoose.connect(
  'MONGODB_URI = mongodb+srv://Yamcham0:qwerty123456@cluster0.ovzw2.mongodb.net/budget?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

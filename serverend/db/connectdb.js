var mongoose = require('mongoose');
var mongoURi = "mongodb+srv://ahmed:ahmed@devconnector-q52ag.mongodb.net/test?retryWrites=true&w=majority";


const mongoConnect = async () => {
    try {
        await mongoose.connect(mongoURi, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('db connected');

    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}
module.exports = mongoConnect;
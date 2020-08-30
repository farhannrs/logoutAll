const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://farhannrs:farhannrs12@cluster0.hy2dt.mongodb.net/logoutDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

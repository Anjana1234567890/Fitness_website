const userRoute = require('./routes/user')
var path = require('path')

module.exports = function (app) {

    app.get('/test', function (req, res) {
        res.send('Welcome to Fitness backend')
    });

    // app.get('/', (req, res) => {
    //     // Send the HTML file as the response
    //     res.sendFile(path.resolve('..\\index.html'));
    // });

    app.use('/user', userRoute)

}
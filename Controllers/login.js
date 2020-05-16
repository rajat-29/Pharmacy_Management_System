var users = require('../Models/UserSchema');

exports.checkLogin = (req, res)  => {
    req.session.isLogin = 0;
    users.findOne({email: req.body.email,password: req.body.password}, function(error,result) {
        if(error)
            throw error;

        if(result != null) {
            req.session.isLogin = 1;
            req.session.email = req.body.email;
            req.session.name = result.name;
            req.session.role = result.role;
            res.send('true');
        }
        else
            res.send('false');
    })     
}
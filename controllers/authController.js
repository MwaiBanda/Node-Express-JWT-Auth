
module.exports.signupGet = (req, res) => {
    res.render('signup');
}

module.exports.signupPost = (req, res) => {
    res.send('login');
}

module.exports.loginGet = (req, res) => {
    res.render('login');
}

module.exports.loginPost = (req, res) => {
    res.send('login');
}


const jwt = require('jsonwebtoken');

module.exports = {
  validateCredentials,
  restricted
}

function validateCredentials(req, res, next) {
  if(!req.body.username){
    return res.status(400).json({ error: 'Please provide a username.' })
    }
  else if(!req.body.password){
    return res.status(400).json({ error: 'Please provide a password.' }) 
    }
  else{
    user = req.body
    next();
  };
};

function restricted(req, res, next){
  const token = req.headers.authorization;

  if(token){
    const secret = process.env.Jwt

    jwt.verify(token, secret, (error, decodedToken) => {
      if(error){  
        res.status(401).json({ message: 'Invalid credentials' })
      }else{
        req.decodeJwt = decodedToken;
        next();
      }
    })
  }else{
    res.status(400).json({ error:'Please provide credentials' });
  }
}
router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({ username})
    .first()
    .then(user => {
        if( user && bycrpt.compareSync(password, user.password)){
            req.session.loggedIn = true;
            req.session.username = user.username;

            res.status(200).json({
                message: `Welcome ${user.username}!`,
            });
        } else {
            res.status(401).json({ message: "Invalid Credentials"});
        }
        })   
        .catch(error => {
            res.status(500).json(error);
        });
    });

    module.exports = router;


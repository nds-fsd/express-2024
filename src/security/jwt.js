const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const jwtSecret = "oqjnafasdlknfqwfnrew3gofnwer";

const jwtMiddleware = (req, res, next) => {
    // Recogemos el header "Authorization". Sabemos que viene en formato "Bearer XXXXX...",
    // así que nos quedamos solo con el token y obviamos "Bearer "
    const authHeader = req.headers["authorization"];
    console.log(req.headers);
    
    if (!authHeader) return res.status(401).json({error: "Unauthorized MISSING HEADER"});
    const token = authHeader.split(" ")[1];
    // Si no hubiera token, respondemos con un 401
    if (!token) return res.status(401).json({error: "Unauthorized"});
  
    let tokenPayload;
  
    try {
      // Si la función verify() funciona, devolverá el payload del token
      tokenPayload = jwt.verify(token, jwtSecret);
    } catch (error) {
      // Si falla, será porque el token es inválido, por lo que devolvemo error 401
      return res.status(401).json({error: "Unauthorized"});
    }
  
    // Guardamos los datos del token dentro de req.jwtPayload, para que esté accesible en los próximos objetos req
    req.jwtPayload = tokenPayload;
    console.log(tokenPayload);
    next();
  };
  


module.exports = {
    jwtMiddleware
}
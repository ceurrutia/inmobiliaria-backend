const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {

  const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado, no se proporcionó un token' });
  }


  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = verified; 
    next(); 
  } catch (error) {
    res.status(400).json({ message: 'Token no válido' });
  }
};

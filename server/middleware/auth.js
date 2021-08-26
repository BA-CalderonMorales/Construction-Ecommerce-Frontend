import jwt from 'jsonwebtoken';

// click the like button => auth middleware (next) => like controller... 

const auth = async (req, res, next) => {
    // next means "do something and then move to the next thing."
    
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // Our token, if it's greater, then it's Google OAuth token.

        let decodedData;

        if(token && isCustomAuth) {
            // same secret used in controllers/users.js
            decodedData = jwt.verify(token, 'test'); // Our token

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token); // Google OAuth

            req.userId = decodedData?.sub; // Google OAuth way to identify different users.
        }
        next();
    
    } catch (error) {
        console.log(error);
    }
}

export default auth;
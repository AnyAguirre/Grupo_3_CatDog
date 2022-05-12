const cookieSession = (req, res, next) => {
    if(typeof req.cookies !== "undefined"){
        if(req.cookies.catdogCookie){
            req.session.user = req.cookies.catdogCookie;
            res.locals.user = req.session.user; 
        }
        next()
    }
    
}
module.exports = cookieSession;
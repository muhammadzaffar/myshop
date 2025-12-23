 
 export const islogedin = async(req, res, next) => {
    if (!req.cookies.token) {
      res.flash("error", "Please login first");
      res.redirect("/login");
    } 
    try{
      const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      const user= await userModel.findOne({email:decoded.email}).select("-password")
      req.user = user;
      next();
    }
    catch(err){
      res.flash("error", "Please login first");
      res.redirect("/login");
    }
  };
  
  export default islogedin;
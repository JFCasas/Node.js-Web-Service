module.exports = (req,res,next)=>{

	if (req.fullUser.admin === true) {

		return next()
	
	}else{

		next(new Error('You have no permissions to be here'))
	}
}
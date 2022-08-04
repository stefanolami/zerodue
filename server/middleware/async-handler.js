// HELPER FUNCTION
exports.asyncHandler = (cb) => {
    return async (req, res, next)=>{
      try {
        await cb(req,res, next);
      } catch(err){
        if (err.code === "ER_BAD_NULL_ERROR") {
          const validationErrors = err.errors.map(err => err.message)
          res.status(400).json({validationErrors});
        } else {
          next(err);
        }
      }
    };
}

/* (err.name === 'SequelizeValidationError'|| err.name === "SequelizeUniqueConstraintError") */
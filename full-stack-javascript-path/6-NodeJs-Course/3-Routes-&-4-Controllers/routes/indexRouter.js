// routes/indexRouter.js

const {Router}=require('express');

const indexRouter=Router();

indexRouter.get('/',(req,res)=>res.send("Main Indexes"));

indexRouter.get('/:indexID',(req,res)=>{
    const {indexID}=req.params;
    res.send(`index ID :${indexID}`);


});

module.exports=indexRouter;
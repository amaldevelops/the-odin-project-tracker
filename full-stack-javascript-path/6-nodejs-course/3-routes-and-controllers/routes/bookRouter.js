// routes/bookRouter.js

const {Router} = require('express');

const bookRouter=Router();

bookRouter.get('/',(req,res)=>res.send("All Books"));

bookRouter.get('/:bookID',(req,res)=>{
    const {bookID}=req.params;
    res.send(`bookId:${bookID}`)

});

module.exports=bookRouter;
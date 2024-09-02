const express = require('express')
const router=express.Router();
const event =require('../model/event_model')
router.get('/',async(req,res)=>{
    const result=await event.find()
    res.status(200).json({
        data:result
    })
})
router.route('/create')
.post((req,res)=>{
    const{title,location,description,date}=req.body;
    event.create({
        title,
        location,
        description,
        date
    })
    res.status(201).json({
        message:"Event Created"
    })
})
router.route('/event/:id')
.get(async(req,res)=>{
    const id=req.params.id
    const result= await event.findById(id)
    if(result){
    res.status(200).json({
        data:result
    })}
    else{
        res.status(402).json({
            message:"Event not found"
        })
    }

})
.delete(async(req,res)=>{
    const id=req.params.id
    const result= await event.findByIdAndDelete(id)
    if(result){
    res.status(200).json({
        message:"Event Deleted"
    })}
    else{
        res.status(402).json({
            message:"Event not found"
        })
    }

})
.put(async(req,res)=>{
    const{title,location,description,date}=req.body;
    const id=req.params.id
    const result= await event.findByIdAndUpdate(id,{title,location,description,date})
    if(result){
        res.status(200).json({
            message:"Updated"
        })
    }

})



module.exports=router
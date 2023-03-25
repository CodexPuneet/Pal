const express= require("express");
const { taskModel } = require("../Model/task.model");
const { assignModel } = require("../Model/task.model");
const taskRouter= express.Router();

taskRouter.get("/home", async(req, res)=>{
    let id = req.body.userId;
    try {
        const data= await taskModel.find({userId:id});
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send("Unable to fetch User data")
    }
})

taskRouter.post("/member", async(req, res)=>{
    let tasks=req.body
    try {
        const data= new assignModel(tasks);
        await data.save()
        res.send("Added task Sucessfully")
    } catch (error) {
        console.log(error);
        res.send("Unable to Add task")
    }
})

taskRouter.post("/add", async(req, res)=>{
    let tasks=req.body
    try {
        const data= new taskModel(tasks);
        await data.save()
        res.send("Added task Sucessfully")
    } catch (error) {
        console.log(error);
        res.send("Unable to Add task")
    }
})


taskRouter.patch("/:id", async(req, res)=>{
    const data= req.body;
    const id= req.params.id;
    try {
      await taskModel.findByIdAndUpdate({_id:id}, data);
        res.send("Updated task");
    } catch (error) {
        console.log(error);
        res.send("Unable to update")
    }
})

taskRouter.delete("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        await taskModel.findByIdAndDelete({_id:id});
        res.send("Deleted Task");
    } catch (error) {
        console.log(error);
        res.send("Unable to delete")
    }
})



module.exports= {
    taskRouter
}
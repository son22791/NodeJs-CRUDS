let Task = require ("../model/index")

exports.getTask = async ( req,res)=>{
    try {
        let dataAll = await Task.find({})
        res.json({
            dataAll
        })
    } catch (error) {
        res.send(error)
    }
}
exports.addTask = async ( req,res)=>{
    try {
        let nameAdd = req.body
        let saveDoc = await Task(nameAdd).save()
        res.json({
            id: saveDoc._id,
            name: saveDoc. name,
            message: "Task Added successfully"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.updateTask = async ( req, res)=>{
    try {
        let idUpdate = req.params.id
        let nameUpdate = req.body
        await Task.findByIdAndUpdate(idUpdate, nameUpdate)
        res.json({
            id: idUpdate,
            name: nameUpdate.name,
            message: "Task Updated successfully"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.deleteTask = async ( req, res)=>{
    try {
        let idDel = req.params.id
        let dataOld = await Task.findById(idDel);
        await dataOld.delete();
        res.json({
            message: "Task deleted successfully"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.paginateTask = async ( req, res)=>{
    try {
        let {limit, page} = req.query;
        let _limit = parseInt(limit)
        let _page = parseInt(page)
        let skip = (_page-1)* _limit
        let allData = await Task.find({})
        let dataPage = await Task.find({}).skip(skip).limit(_limit)
        let totalPage = Math.ceil(allData.length/ _limit)
        res.json({
            dataPage,
            totalPage,
        })
    } catch (error) {
        res.send(error)
    }
}
exports.searchTask = async ( req, res)=>{
    try {
        let {nameSearch, limit, page} = req.query;
        let _limit = parseInt(limit)
        let _page = parseInt(page)
        let skip = (_page-1)* _limit
        let allData = await Task.find({name:{$regex: nameSearch, $options : "i"}})
        let dataPage = await Task.find({name:{$regex: nameSearch, $options : "i"}}).skip(skip).limit(_limit)
        let totalPage = Math.ceil(allData.length/ _limit)
        res.json({
            dataPage,
            totalPage,
        })
        
    } catch (error) {
        res.send(error)
    }
}
exports.searchIdTask = async ( req, res)=>{
    try {
        let id = req.params.id
        console.log(id);
        let searchIdTask = await Task.find({_id : id})
        res.json({
            searchIdTask
        })
    } catch (error) {
        res.send(error)
    }
}

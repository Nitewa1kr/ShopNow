var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mongodb://adeel:password123@ds119370.mlab.com:19370/shownowdb', ['items']);

// GET ALL ITEMS
router.get('/items', function(req, res, next){
    db.items.find(function(err,items){
        if(err)
        {
            res.send(err);
        }
        res.json(items);
    });  
});

// GET ONE ITEM AS PER ID
router.get('/item/:id', function(req, res, next){
    db.items.findOne({_id: mongojs.ObjectId(req.params.id)} ,function(err,item){
        if(err)
        {
            res.send(err);
        }
        res.json(item);
    });  
});

//STORE ITEMS AS PER AISLE
router.post('/item', function(req, res, next){
    var item = req.body;
    if(!item.ItemName || !(item.ShopNow + ''))
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
    db.items.save(item, function(err,item){
        if(err)
        {
            res.send(err);
        }
        res.json(item);
        });
    }
});

// UPDATE LIST OF ITEMS

// GET ONE ITEM AS PER ID
router.put('/item/:id', function(req, res, next){
    var item = req.body;
    var updItem = {};

    if(item.ShopNow)
    {
        updItem.ShopNow = item.ShopNow;
    }
    if(item.isShopped)
    {
        updItem.isShopped = item.isShopped;
    }
    if(item.ItemName)
    {
        updItem.ItemName = item.ItemName;
    }
    if(item.AisleNum)
    {
        updItem.AisleNum = item.AisleNum;
    }
    if(!updItem)
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else{
        db.items.update({_id: mongojs.ObjectId(req.params.id)},updItem,{} ,function(err,item){
        if(err)
        {
            res.send(err);
        }
        res.json(item);
    });  
    }
    
});

// DELETE ITEMS
router.delete('/item/:id', function(req, res, next){
    db.items.remove({_id: mongojs.ObjectId(req.params.id)} ,function(err,item){
        if(err)
        {
            res.send(err);
        }
        res.json(item);
    });  
});

module.exports = router;
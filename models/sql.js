var mongodb=require("./db");
function find(name,callback){
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        db.collection("product",function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //查询name属性为usename的文档
            collection.findOne({name:name},function(err,doc){
                mongodb.close();
                if(doc){
                    //封装文档为Product对象
                    var product=new Product(doc);
                    callback(err,product);
                }else{
                    callback(err,null);
                }
            })
        })
    })
};
function save(json,table,callback){
    //存入mongodb文档
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        //读取users机会
        db.collection(table,function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //写入User文档
            collection.insert(json,{safe:true},function(err){
                console.log("创建成功！");
                mongodb.close();
            })
        });
    })
}
var arrs=[
    {
        _id:"1",
        productNmae:'productNmae',
        price:'price',
        mainImg:'mainImg',
        describe:'describe',
        type:'type',
        article:'article'
    }
];
for(var i=0; i<arrs.length; i++){
    save(arrs[i],'product',function(err){
        console.log(err);
    });
}

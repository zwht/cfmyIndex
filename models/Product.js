var mongodb=require("./db");
function Product(data){
    this.name=data.name;
    this.password=data.password;
    return this;
}
Product.find=function(name,callback){
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
           /* collection.findOne({name:name},function(err,doc){
                mongodb.close();
                if(doc){
                    //封装文档为Product对象
                    var product=new Product(doc);
                    callback(err,product);
                }else{
                    callback(err,null);
                }
            });*/
            collection.find().toArray(function(err,docs){
                mongodb.close();
                console.log(docs);
                if(docs){
                    //封装文档为Product对象
                    //var product=new Product(docs);
                    callback(err,docs);
                }else{
                    callback(err,null);
                }
            })

        })
    })
};
//将User类给予接口
module.exports=Product;
/**
 * 使用原型增加保存方法
 * @param callback
 * */
Product.prototype.save=function save(callback){
    //存入mongodb文档
    var user={
        name:this.name,
        password:this.password
    };
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        //读取users机会
        db.collection("product",function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //为name属性增加索引
            collection.ensureIndex("name",{unique:true});
            //写入User文档
            collection.insert(user,{safe:true},function(err){
                console.log("创建成功！");
                mongodb.close();
            })
        });
    })
};
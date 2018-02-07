var settings=require("../settings"),
    mongodb=require('mongodb'),
    server=new mongodb.Server(settings.host,27017,{auto_reconnect:true});
console.error("mongoDB:host="+settings.host+"、PORT：27017");
module.exports=new mongodb.Db(settings.db,server,{safe:true});

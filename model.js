const db = require("./db")

const AdOption = function(option) {
    this.optionId = option.optionId;
    this.companyId = option.companyId;
    this.audienceCount = option.audienceCount;
    this.cost = option.cost;
};

var advertDB = {};

function ObjToArray(obj) {
    var arr = obj instanceof Array;

    return (arr ? obj: Object.keys(obj)).map(function(i){
        var val = arr ? i : obj[i];
        if(typeof val === 'object')
        return ObjToArray(val);
        else
        return val;
    });
}
advertDB.addOption = (data, callback) => {
    var conn = db.getConnection();

    var advertisementData = ObjToArray(data);

    conn.connect((err) => {
        if (err) {
            callback(err,null);
        }
        else {
            var queryStmt = "INSERT INTO AdvertisementOptions(optionId, companyId, audienceCount, cost) VALUES ?";

            conn.query(queryStmt, [advertisementData],(err,result) => {
                if (err) {
                    console.log("ERROR -- cannot insert new option");
                    console.log(err.code);
                    callback(err,null);
                }
                else {
                    callback(null,result);
                }
            });
        }
    })
}

module.exports = advertDB;
module.exports = function updateStalled() {

    return new Promise(function(resolve, reject) {
        let conditions = {"progress": { $ne: 1 }, "isStalled": false, "updatedAt": { $lt: new Date() - 3000 }};
        let update = { $set: { "isStalled": true, "message": "stalled" } }
        require('../models/Process').updateMany(conditions, update, function (err, res) {
            if (err) {
                console.log("err stalled");
                reject();
            } else {
                console.log("res stalled");
                resolve();
            }
        });
    });
}
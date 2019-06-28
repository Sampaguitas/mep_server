//https://medium.com/@paulrohan/file-upload-to-aws-s3-bucket-in-a-node-react-mongo-app-and-using-multer-72884322aada

var express = require('express');
const router = express.Router();
var aws = require('aws-sdk');
var multer = require('multer');
var path = require('path');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

//configuring the AWS environment
const accessKeyId = require('../../config/keys').accessKeyId;
const secretAccessKey = require('../../config/keys').secretAccessKey;
const region = require('../../config/keys').region;
const awsBucketName = require('../../config/keys').awsBucketName;

aws.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region
});

router.post('/', upload.single('file'), function (req, res) {
    const project = req.body.project;
    const file = req.file;
    if (!project) {
      return res.status(400).json({
        message: fault(2400).message
        //"2400": "No Project selected",
      });      
    } else if (!file) {
      return res.status(400).json({
        message: fault(2401).message
        //"2401": "No file selected",
      });         
    } else {
      var s3 = new aws.S3();

      var params = {
          Bucket: awsBucketName,
          Body: file.buffer,
          Key: path.join('templates', project, file.originalname),
      };

      s3.upload(params, function(err, data) {
          if (err) {
            res.status(500).json({ error: true, Message: err });
          } else {
            res.send({ data });
          }
      });
    }
});

module.exports = router;
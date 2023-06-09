const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    enrolledDepartment:{
        type:String,
        require:true
    },
    enrollmentDate:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('studentModel',studentSchema);
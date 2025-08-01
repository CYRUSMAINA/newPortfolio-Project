import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    created:{
        type:Date,
        default:Date.now,
    },
    updated:{
        type:Date,
        default:Date.now,
    }
});
export default mongoose.models.User || mongoose.model('User', userSchema);


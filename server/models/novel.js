import mongoose from 'mongoose';

const novelSchema = new mongoose.Schema({
 "title": String,
 "author": String,
 "chapters": [String],   
})

const Novel = mongoose.model('novel', novelSchema);
export default Novel;
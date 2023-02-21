import mongoose from 'mongoose';

const novelSchema = new mongoose.Schema({
 "title": String,
 "author": String,
 "chapters": [{
    "title": String,
    "content": String
}],   
})

const Novel = mongoose.model('Novel', novelSchema);
export default Novel;
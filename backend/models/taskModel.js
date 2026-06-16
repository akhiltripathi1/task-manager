import mongoose from "mongoose";

const schema = mongoose.Schema;

const taskSchema = new schema({
    taskName: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
},{timestamps:true});

const taskModel = mongoose.model("todos",taskSchema);

export default taskModel;
import taskModel from '../models/taskModel.js';

export const createTask = async (req, res) => {
  const data = req.body;
  try {
    const model = new taskModel(data);
    await model.save();
    res.status(201).json({ message: 'Task is created', success: true });
  } catch {
    res.status(500).json({ message: 'Failed to create task', success: false });
  }
};

export const fetchAllTask = async (req, res) => {
  try {
    const data = await taskModel.find({});

    res.status(200).json({ message: 'All the tasks', success: true, data });
  } catch {
    res.status(500).json({ message: 'Failed to get all tasks', success: false });
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const obj = { $set: { ...body } }; // $set -mogodb keyword for update
    await taskModel.findByIdAndUpdate(id, obj);

    res.status(200).json({ message: 'Task updated', success: true });
  } catch {
    res.status(500).json({ message: 'Failed to update task', success: false });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    await taskModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Task deleted', success: true });
  } catch {
    res.status(500).json({ message: 'Failed to delete task', success: false });
  }
};

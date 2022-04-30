import TaskModel from '../models/Task';

export const viewTasks = async (req, res) => {
    const tasks = await TaskModel.find().lean();
    res.render('index', {tasks:tasks});
}

export const createTask = async (req, res) => {
    const task = TaskModel(req.body);
    await task.save();
    res.redirect('/');
}

export const updateTask = async (req, res) => {
    try
    {
        const task = await TaskModel.findById(req.params.id).lean();
        res.render('edit', {task});
    }
    catch(error)
    {
        console.log(error);
    }
}

export const postUpdatedTask = async (req, res) => {
    const {id} = req.params
    await TaskModel.findByIdAndUpdate(id, req.body);
    res.redirect('/');
}

export const deleteTask = async (req, res) => {
    const {id} = req.params
    await TaskModel.findByIdAndDelete(id);
    res.redirect('/');
}

export const taskIsDone = async (req, res) => {
    const {id} = req.params;
    const task = await TaskModel.findByIdAndUpdate(id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
}



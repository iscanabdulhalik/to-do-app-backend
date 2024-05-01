import TaskModel from "../Model/Todo.js";

async function getAllTasks(req, res) {
  const tasks = await TaskModel.find();
  res.json(tasks);
}

async function createTask(req, res) {
  try {
    const task = req.body;
    const newTask = new TaskModel(task);
    await newTask.save();
    res.json("Task created successfully");
  } catch (error) {
    console.log(error);
    console.log("task could not be created");
  }
}

async function getTask(req, res) {
  const taskId = req.params.id;
  const task = await TaskModel.findById(taskId);

  res.json(task);
}

async function updateTask(req, res) {
  try {
    const taskId = req.params.id;
    const task = req.body;
    await updateTask.findAndUpdate(taskId, task, { new: true });
    res.json("Task updated successfully");
  } catch (error) {
    console.log(error);
    console.log("task update failed");
  }
}

async function deleteTask(req, res) {
  try {
    const taskId = req.params.id;
    await TaskModel.findByIdAndDelete(taskId);
    res.json("Task deleted successfully");
  } catch (error) {
    console.log(error);
    console.log("task silinemedi");
  }
}


async function deleteAllNonActiveTasks(req, res) {
    try {
      const tasks = await TaskModel.find();
      for (const task of tasks) {
        if (!task.isActive) {
          await TaskModel.findByIdAndDelete(task._id);
          
        }
      }
      res.json({ message: "Tasks deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Tasks could not be deleted" });
    }
  }
  
  

export {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllNonActiveTasks,
};

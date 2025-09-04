import Project from "../models/project.js";
import Task from "../models/task.js";
import Workspace from "../models/workspace.js";



//............Creating Task ...........................................................
const createTask = async (req, res) => { 
    console.log("Create Task");
    try {
        const { projectId } = req.params;
        const { title, description, status, priority, dueDate, assignees } = req.body;

        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            });
        }

        const workspace = await Workspace.findById(project.workspace);

        if (!workspace) {
            return res.status(404).json({
                message: "Workspace not found",
            });
        }

        const isMember = workspace.members.some(
            (member) => member.user.toString() === req.user._id.toString()
        );

        if (!isMember) {
            return res.status(403).json({
                message: "You are not a member of this workspace",
            });
        }


        const newTask = await Task.create({
            title,
            description,
            status,
            priority,
            dueDate,
            assignees,
            project: projectId,
            createdBy: req.user._id,
        });

        project.tasks.push(newTask._id);
        await project.save();
        
        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
    
};


//...........Receiving Task sorted with ID to frontend through this function..................
const getTaskById = async (req, res) => { 
    console.log("You triggered get task by ID in backend");


    try {
        const { taskId } = req.params;

        const task = await Task.findById(taskId)
            .populate("assignees", "name profilePicture")
            .populate("watchers", "name profilePicture");
        
        
        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }


        const project = await Project.findById(task.project)
            .populate(
                "members.user",
                "name profilePicture"
        );
        
        res.status(200).json({
            task,
            project
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
        
    }
    
};



export { createTask, getTaskById };
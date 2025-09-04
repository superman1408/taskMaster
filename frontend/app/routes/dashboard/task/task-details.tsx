import { Loader } from '@/components/loader';
import { useTaskByIdQuery } from '@/hooks/use-task';
import type { Project, Task } from '@/types';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const TaskDetails = () => {
    const { taskId, projectId, workspaceId } = useParams<{
        taskId: string;
        projectId: string;
        workspaceId: string;
    }>();

    const navigate = useNavigate();


    const { data, isLoading } = useTaskByIdQuery(taskId!) as {
        data: {
            task: Task;
            project: Project;
        };
        isLoading: boolean;
    };



    if (isLoading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }


    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-2xl font-bold">Task not found</div>
            </div>
        );
    }


    const { task, project } = data;



    return (
        <div>
            <h1>{project.title}</h1>
            <h4>{task.title}</h4>
        </div>
    )
}

export default TaskDetails;
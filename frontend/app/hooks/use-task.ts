import type { CreateTaskFormData } from "@/components/task/create-task-dialog";
import { fetchData, postData } from "@/lib/fetch-util";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateTaskMutation = () => { 
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { projectId: string; taskData: CreateTaskFormData }) =>
            postData(`tasks/${data.projectId}/create-task`, data.taskData),
        onSuccess: (data: any) => {
            queryClient.invalidateQueries({
                queryKey: ["projectId", data.project],
            });
        },
    });
};


export const useTaskByIdQuery = (taskId: string) => { 
    return useQuery({
        queryKey: ["task", taskId],
        queryFn: () => fetchData(`/tasks/${taskId}`),
    });
};
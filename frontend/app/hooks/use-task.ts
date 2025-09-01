import type { CreateTaskFormData } from "@/components/task/create-task-dialog";
import { postData } from "@/lib/fetch-util";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
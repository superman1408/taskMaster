import type { MemberProps } from "@/types";


interface CreateProjectDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    workspaceId: string;
    workspaceMembers: MemberProps[];
}


export const CreateProjectDialog = ({
    isOpen,
    onOpenChange,
    workspaceId,
    workspaceMembers,
}: CreateProjectDialogProps) => { 
    return <div>Create Project Dialog</div>
};
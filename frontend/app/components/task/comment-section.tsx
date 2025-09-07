import type { User } from "@/types";
import { useState } from "react";



export const CommentSection = ({ taskId, members }: { taskId: string; members: User[] }) => { 

    const [newComment, setNewComment] = useState("");

    // const { mutate, addComment, isPending } = useAddCommentMutation();

    const handleAddComment = () => { };


    return (
        <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Comment Section</h3>
        </div>
    )
};
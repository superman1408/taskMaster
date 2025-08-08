import type { Workspace } from "@/types";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";


interface HeaderProps {
    onWorkspaceSelected: (Workspace: Workspace) => void;
    selectedWorkspace: Workspace | null;
    onCreateWorkspace: () => void;
}


export const Header = ({
    onWorkspaceSelected,
    selectedWorkspace,
    onCreateWorkspace,
}: HeaderProps) => { 
    return (
        <div className="bg-background sticky top-0 z-40 border-b">
            <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                Header Section
            </div>
        </div>
    )
};
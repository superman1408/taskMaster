import type { Workspace } from "@/types";
import { Button } from "../ui/button";
import { Bell, Menu, PlusCircle } from "lucide-react";
import { useAuth } from "@/provider/auth-context";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router";
import { WorkspaceAvatar } from "../workspace/workspaceAvatar";


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
    const { user, logout } = useAuth();
    const workspaces = [];


    const handleOnClick = (workspace: workspace) => { };



    return (
        <div className="bg-background sticky top-0 z-40 border-b">
            <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {selectedWorkspace ? (
                                <>
                                {selectedWorkspace.color && (
                                    <WorkspaceAvatar
                                    color={selectedWorkspace.color}
                                    name={selectedWorkspace.name}
                                    />
                                )}
                                    <span className="font-medium">{selectedWorkspace?.name}</span>
                                </>
                                ) : (
                                    <span className="font-medium">Select Workspace</span>
                            )}
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuGroup>
                            {
                                workspaces.map((ws) => (
                                    <DropdownMenuItem
                                        key={ws._id}
                                        onClick={() => handleOnClick(ws)}
                                    >
                                        {
                                            ws.color && (
                                                <WorkspaceAvatar color={ws.color} name={ws.name} />
                                            )
                                        }
                                        <span className="ml-2">{ws.name}</span>
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuGroup>

                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={onCreateWorkspace}>
                                <PlusCircle className="w-4 h-4 mr-2" />
                                Create Workspace
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size= "icon">
                        <Bell />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="rounded-full border p-1 w-8 h-8">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={user?.profilePicture} alt={user?.name} />
                                    <AvatarFallback className="bg-black text-white">
                                        {user?.name?.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link to="/user/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={logout}>Log Out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            
                            {/* <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
};
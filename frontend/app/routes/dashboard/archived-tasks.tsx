// import React from 'react';
// import { useGetArchivedTasksQuery } from "@/hooks/use-task";
// import { Loader } from '@/components/loader';


// const ArchivedTask = () => {
//   const { data: archivedTasks, isLoading, isError } = useGetArchivedTasksQuery();

//   console.log(archivedTasks);
  

//   if (isLoading) {
//     return <Loader />
//   }


//   return (
//     <div className='flex justify-center items-center h-full'>
//       <span className='text-xl font-bold text-blue-600'>Archived Tasks</span>
//     </div>
//   )
// }

// export default ArchivedTask;



// import { Loader } from "@/components/loader";
// import { useGetArchivedTasksQuery } from "@/hooks/use-task";
// import type { Task } from "@/types";

// const ArchivedTask = () => {
//   const { data: archivedTasks, isLoading, isError } = useGetArchivedTasksQuery() as {
//     data: Task[];
//     isLoading: boolean;
//     isError: any;
//   };

//   if (isLoading) return <Loader />;
//   if (isError) return <div>Failed to load archived tasks</div>;

//   if (!archivedTasks) {
//     return <div>No archived tasks found</div>;
//   }

//   return (
//     <div className="space-y-4">
//       <h1 className="text-2xl font-bold">Archived Tasks</h1>
//       <ul className="divide-y">
//         {archivedTasks.map((task) => (
//           <li key={task._id} className="p-4 flex justify-between">
//             <div>
//               <p className="font-medium">{task.title}</p>
//               <p className="text-sm text-gray-500">{task.description}</p>
//             </div>
//             <span className="text-xs text-gray-400">
//               {new Date(task.updatedAt).toLocaleDateString()}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ArchivedTask;


import { Loader } from "@/components/loader";
import { useGetArchivedTasksQuery } from "@/hooks/use-task";
import type { Task } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const ArchivedTask = () => {
  const { data: archivedTasks, isLoading, isError } =
    useGetArchivedTasksQuery() as {
      data: Task[];
      isLoading: boolean;
      isError: any;
    };

  if (isLoading) return <Loader />;
  if (isError) return <div>Failed to load archived tasks</div>;

  if (!archivedTasks || archivedTasks.length === 0) {
    return <div>No archived tasks found</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Archived Tasks</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {archivedTasks.map((task) => (
          <Card
            key={task._id}
            className="hover:shadow-md transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <Link
                  to={`/workspaces/${task.project.workspace}/projects/${task.project._id}/tasks/${task._id}`}
                  className="font-medium hover:text-primary hover:underline transition-colors flex items-center"
                >
                  {task.title}
                  <ArrowUpRight className="size-4 ml-1" />
                </Link>
                {/* <CardTitle className="text-lg">{task.title}</CardTitle> */}
                <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                  Archived
                </Badge>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(task.updatedAt).toLocaleDateString()}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {task.description || "No description provided"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArchivedTask;


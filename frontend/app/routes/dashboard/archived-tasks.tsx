import React from 'react';
import { useGetArchivedTasksQuery } from "@/hooks/use-task";
import { Loader } from '@/components/loader';


const ArchivedTask = () => {
  const { data: archivedTasks, isLoading, isError } = useGetArchivedTasksQuery();

  console.log(archivedTasks);
  

  if (isLoading) {
    return <Loader />
  }


  return (
    <div>ArchivedTask</div>
  )
}

export default ArchivedTask;



// import { Loader } from "@/components/loader";
// import { useGetArchivedTasksQuery } from "@/hooks/use-task";

// const ArchivedTasksPage = () => {
//   const { data: archivedTasks, isLoading, isError } = useGetArchivedTasksQuery();

//   if (isLoading) return <Loader />;
//   if (isError) return <div>Failed to load archived tasks</div>;

//   if (!archivedTasks || archivedTasks.length === 0) {
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

// export default ArchivedTasksPage;

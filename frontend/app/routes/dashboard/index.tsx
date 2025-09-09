import { useGetWorkspaceStatsQuery } from '@/hooks/use-workspace';
import React from 'react';
import { useSearchParams } from 'react-router';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const workspaceId = searchParams.get("workspaceId")

  const { data: workspaceStats } = useGetWorkspaceStatsQuery(workspaceId!);


  return (
    <div className='flex items-center justify-center h-screen border-l-accent-foreground text-emerald-500'>Dashboard</div>
  )
};

export default Dashboard;
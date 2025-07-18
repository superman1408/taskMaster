import React from 'react';

import type { Route } from "../../+types/root";

import { Link } from 'react-router';
import { Button } from '@/components/ui/button';



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Task Master" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Homepage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-4'>
      <Link to={"/sign-up"}>
        <Button className='bg-blue-500 text-white'>login</Button>
      </Link>
      <Link to="/sign-in">
        <Button variant={'outline'} className='bg-blue-500 text-white'>Sign Up</Button>
      </Link>
    </div>
  )
}

export default Homepage;
import { signInSchema } from '@/lib/schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from 'console';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';


type SigninFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  // const form = useForm<z.infer<typeof signInSchema>>({
  //   resolver: zodResolver(signInSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   }
  // });


    const form = useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
    });
  
  
  const handleOnSubmit = (value: SigninFormData) => { 
    console.log(value);
  };



  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-muted-40 p-4'
    >
      <Card className='max-w-md w-full shadow-xl'>
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign In to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)}>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='email@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn;
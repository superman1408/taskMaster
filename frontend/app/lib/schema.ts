import { z } from "zod";


export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),//z.string().email() but this typescript code is deprecated so z.email("invalid email address") can be used instead.
    password: z.string().min(6, "Password is required."),//z.string().min(8) this can be set so that new user need to create password with min of 8 characters but policy can change so we have removed it and decide it at deployment stage.
});


export const signUpSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be 8 characters."),
    confirmPassword: z.string().min(8, "Password must be 8 characters."),
}).refine((val) => val.password === val.confirmPassword, {
    path: ["confirmPassword"],
    error: "Password do not match",//message: "Password do not match." but this "message" is deprecated.
});
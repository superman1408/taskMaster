import { z } from "zod";


export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),//z.string().email() but this typescript code is deprecated
    password: z.string().min(6, "Minimum of 6 characters is required."),//z.string().min(8) this can be set so that new user need to create password with min of 8 characters but policy can change so we have removed it and decide it at deployment stage.
});
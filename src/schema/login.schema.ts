import * as z from "zod"

export const loginSchema = z.object({
 
    email: z
    .email("Enter vailed email")
    .nonempty("Please enter your email"),
    password:z
    .string()
    .nonempty("Please enter your password")
    .min(8, "Bug password must be at least 5 characters."),
  
})


export type loginDateType =z.infer<typeof loginSchema>
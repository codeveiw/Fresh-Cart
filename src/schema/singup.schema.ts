import * as z from "zod"

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty("Please enter your name")
    .min(5, "Bug name must be at least 5 characters.")
    .max(32, "Bug name must be at most 32 characters."),
  phone: z
    .string()
    .nonempty("Please enter your phone number")
    .regex(/^01[123450][0-9]{8}$/,"Phone must be egyptian number"),
    email: z
    .email("Enter vailed email")
    .nonempty("Please enter your email"),
    password:z
    .string()
    .nonempty("Please enter your password")
    .min(8, "Bug password must be at least 5 characters."),
    rePassword:z
    .string()
    .nonempty("Please enter your re password")
    .min(8, "Bug re password must be at least 5 characters."),
}).refine((data)=>data.password==data.rePassword,{
    path: ["rePassword"],
    error: "password and repassword not matched"
})

export type signupDateType =z.infer<typeof signUpSchema>
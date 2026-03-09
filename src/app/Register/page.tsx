"use client"

import {
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import Image from "next/image"
import Link from "next/link"
import { signupDateType, signUpSchema } from "@/schema/singup.schema"
import { signupAction } from "../_actions/signup.action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Register() {
  const route =useRouter()
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    resolver:zodResolver(signUpSchema)
  })

async function onSubmit(values: signupDateType) {
const datainfo =await signupAction(values)
console.log(datainfo)
if(datainfo?.success){
  toast.success("sign up successfully",{position:"top-center"})
  route.push("/Login")
  
}else{
toast.success("sign up error")
}
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-zinc-100">

        {/* Left Side: Image/Branding */}
        <div className="hidden md:block md:w-1/2 relative min-h-[600px]">
          <Image
            src="/register-man-bg.png"
            alt="Registration Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-10 text-white">
            <h2 className="text-3xl font-bold mb-2">Join Our Community</h2>
            <p className="text-zinc-200">Experience the best e-commerce platform with exclusive deals and personalized recommendations.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Create an Account</h1>
              <p className="mt-2 text-zinc-500">Sign up to get started today.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1.5">
                    <FieldLabel htmlFor={field.name} className="text-sm font-medium text-zinc-700">Full Name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="John Doe"
                      className="h-11 focus-visible:ring-primary/20 transition-all"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1.5">
                    <FieldLabel htmlFor={field.name} className="text-sm font-medium text-zinc-700">Phone Number</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="+20 123 456 7890"
                      className="h-11 focus-visible:ring-primary/20 transition-all"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1.5">
                    <FieldLabel htmlFor={field.name} className="text-sm font-medium text-zinc-700">Email Address</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      placeholder="alex@example.com"
                      className="h-11 focus-visible:ring-primary/20 transition-all"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1.5">
                      <FieldLabel htmlFor={field.name} className="text-sm font-medium text-zinc-700">Password</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="password"
                        placeholder="••••••••"
                        className="h-11 focus-visible:ring-primary/20 transition-all"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </div>
                  )}
                />

                <Controller
                  name="rePassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1.5">
                      <FieldLabel htmlFor={field.name} className="text-sm font-medium text-zinc-700">Confirm Password</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="password"
                        placeholder="••••••••"
                        className="h-11 focus-visible:ring-primary/20 transition-all"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </div>
                  )}
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base font-semibold bg-black text-white transition-all hover:scale-[1.01] active:scale-[0.99] mt-6">
                Register Now
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link href="/Login" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

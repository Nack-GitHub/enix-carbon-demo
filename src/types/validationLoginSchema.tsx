
import { z } from "zod";

export const validationLoginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
        message: "Must be a valid email",
    }),
    password: z
        .string()
        .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
});

export type TValidationLogin = z.infer<typeof validationLoginSchema>
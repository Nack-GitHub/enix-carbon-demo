import { z } from "zod";

export const userSchema = z.object({
    id: z.string().nullish(),
    email: z.string(),
}).strict();

export type TUser = z.infer<typeof userSchema>

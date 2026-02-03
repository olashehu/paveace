import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long." })
    .max(25, { message: "Name must be at most 25 characters long." })
    .trim(),
  email: z.string().email({ error: "Invalid email address" }).trim(),
  phone: z.string().min(7).max(15).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10).max(1000),
});

export type ContactState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        service?: string[];
        message?: string[];
      };
      message?: string;
    }
  | undefined;

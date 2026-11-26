import { z } from "zod";

export const studentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .transform((val) => val.toUpperCase()),
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  age: z.coerce
    .number()
    .int("Age must be a whole number")
    .min(1, "Age must be at least 1")
    .max(120, "Age must be 120 or less"),
  course: z
    .string()
    .trim()
    .min(2, "Course must be at least 2 characters")
    .transform((val) => val.toUpperCase()),
});

export default studentSchema;

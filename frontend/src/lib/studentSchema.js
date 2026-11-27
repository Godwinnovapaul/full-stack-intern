import { z } from "zod";
export const studentSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  score: z.coerce.number().min(0).max(100, { message: "Score must be between 0 and 100" }),
});

export const cleanInput = (input) => {
  if (typeof input !== "string") return input;
  return input.trim().replace(/[<>]/g, "");
};

export default studentSchema;

import { z } from "zod";

// Zod schema for Event Vendor validation
export const vendorTaskSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Task title must be at least 3 characters" })
    .max(80, { message: "Task title cannot exceed 80 characters" }),
  vendorName: z
    .string()
    .min(2, { message: "Vendor name must be at least 2 characters" }),
  category: z.enum([
    "Catering",
    "Photography",
    "Venue",
    "Decoration",
    "Sound & Lighting",
    "Entertainment",
  ]),
  budget: z.coerce.number().positive({ message: "Budget must be greater than 0" }),
  date: z.string().min(1, { message: "Event date is required" }),
  priority: z.enum(["High", "Medium", "Low"]).default("Medium"),
  status: z.enum(["Pending", "In Progress", "Confirmed", "Completed"]).default("Pending"),
});

// Sanitization utility illustrating defense-in-depth against XSS
export const sanitizeInput = (dirtyStr) => {
  if (typeof dirtyStr !== "string") return dirtyStr;
  return dirtyStr
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default vendorTaskSchema;

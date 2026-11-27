import { z } from "zod";

// Zod validation schema for booking form
export const bookingSchema = z.object({
  clientName: z
    .string()
    .min(3, { message: "Client name must be at least 3 characters" })
    .max(50, { message: "Client name is too long" }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[0-9+\-\s]+$/, { message: "Enter numbers only" }),
  serviceType: z
    .string()
    .min(1, { message: "Please select an event service" }),
  eventDate: z
    .string()
    .min(1, { message: "Please select an event date" }),
  budget: z
    .coerce
    .number({ invalid_type_error: "Budget must be a valid number" })
    .positive({ message: "Budget must be greater than 0" }),
  notes: z.string().optional(),
});

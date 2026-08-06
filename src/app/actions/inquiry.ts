"use server";

import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is too short").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  company: z.string().max(150).optional().nullable(),
  country: z.string().min(2, "Country name is too short").max(100),
  product: z.string().max(100).optional().nullable(),
  requirement: z.string().min(10, "Please provide more details").max(2000),
});

export async function submitInquiry(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      country: formData.get("country"),
      product: formData.get("product"),
      requirement: formData.get("requirement"),
    };

    const validatedData = inquirySchema.safeParse(rawData);
    
    if (!validatedData.success) {
      return { success: false, error: "Validation failed", errors: validatedData.error.flatten().fieldErrors };
    }

    await connectDB();
    const newInquiry = await Inquiry.create(validatedData.data);
    
    return { success: true, id: newInquiry._id.toString() };
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return { success: false, error: "Failed to submit inquiry" };
  }
}

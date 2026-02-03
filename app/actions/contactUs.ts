"use server";

import { render } from "@react-email/render";
import { Resend } from "resend";
import { contactSchema } from "../lib/contactSchema";
import EmailTemplate from "../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactUs = async (_state: unknown, data: FormData) => {
  const validatedFields = contactSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    service: data.get("service"),
    message: data.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid form fields.",
    };
  }

  try {
    const { name, email, phone, service, message } = validatedFields.data;
    const phoneNumber = phone ? Number(phone) : 0;
    const emailHtml = await render(
      EmailTemplate({ name, email, phone: phoneNumber, service, message }),
    );

    const { data, error } = await resend.emails.send({
      from: "Paveace <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL || ""],
      subject: `New Contact Us Message from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { message: "Failed to send email." };
    }
    if (!data.id) {
      console.error("Email sending failed, no ID returned.");
      return { message: "Failed to send email." };
    }

    return data;
  } catch (error) {
    console.error("Email error:", error);
  }

  return { message: "Email sent successfully." };
};

import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

export const submitForm = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; business: string; website: string }) => data)
  .handler(async ({ data }) => {
    try {
      const { name, email, business, website } = data;

      if (!name || !email || !business || !website) {
        return { error: "All fields are required" };
      }

      await resend.emails.send({
        from: "ZagZig Marketing <onboarding@resend.dev>",
        to: "nirmal@zagzigmarketing.com",
        subject: "New SEO Audit Request",
        html: `
          <h2>New SEO Audit Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Website:</strong> ${website}</p>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      return { error: "Failed to send email" };
    }
  });

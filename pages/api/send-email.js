import formData from "form-data";
import Mailgun from "mailgun.js";
import { format } from "date-fns";
import { customConfig } from "@/project.custom.config";

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "dummy",
});

if (!process.env.MAILGUN_API_KEY) {
  console.log("⚠️ MAILGUN_API_KEY missing from .env");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { to, subject, jobDetails } = req.body;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Job Verification Notification</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #2c3e50; }
          .job-details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Your Job Posting Has Been Verified</h1>
          <p>Dear ${jobDetails.Creator.FullName},</p>
          <p>We're pleased to inform you that your job posting has been verified and is now live on our platform.</p>
          <div class="job-details">
            <h2>${jobDetails.JobTitle}</h2>
            <p><strong>Company:</strong> ${jobDetails.EmployerName}</p>
            <p><strong>Location:</strong> ${jobDetails.Location}</p>
            <p><strong>Job Type:</strong> ${jobDetails.JobType}</p>
            <p><strong>Published Date:</strong> ${format(
              new Date(jobDetails.Published),
              "MMMM dd, yyyy"
            )}</p>
          </div>
          <p>You can view your job posting on our website: <a href="${
            customConfig.domainWithHttps
          }/job/${jobDetails._id}">${customConfig.domainWithHttps}/job/${
    jobDetails._id
  }</a></p>
          <p>Thank you for using Environmental Job Boards!</p>
          <p>Best regards,<br>The Environmental Job Boards Team</p>
          <p style="font-size: 12px; color: #666;">
            This is a transactional email regarding your job posting. If you no longer wish to receive these notifications, 
            please <a href="{{{unsubscribe_url}}}">unsubscribe here</a>.
          </p>
        </div>
      </body>
    </html>
  `;

  const plainTextContent = `
    Your Job Posting Has Been Verified

    Dear ${jobDetails.Creator.FullName},

    We're pleased to inform you that your job posting has been verified and is now live on our platform.

    Job Details:
    Title: ${jobDetails.JobTitle}
    Company: ${jobDetails.EmployerName}
    Location: ${jobDetails.Location}
    Job Type: ${jobDetails.JobType}
    Published Date: ${format(new Date(jobDetails.Published), "MMMM dd, yyyy")}

    You can view your job posting on our website: ${
      customConfig.domainWithHttps
    }/job/${jobDetails._id}

    Thank you for using Environmental Job Boards!

    Best regards,
    The Environmental Job Boards Team

    To unsubscribe from these notifications, please visit: {{{unsubscribe_url}}}
  `;

  const data = {
    from: customConfig.mailgun.fromNoReply,
    to: [to],
    subject: subject,
    html: htmlContent,
    text: plainTextContent, // Plain text version for clients that don't support HTML
    "h:Reply-To": customConfig.mailgun.supportEmail,
    "o:tag": ["job-verification", "transactional"],
    "o:tracking": "yes",
    "o:tracking-clicks": "htmlonly",
    "o:tracking-opens": "yes",
    "v:job_id": jobDetails._id,
    "v:employer": jobDetails.EmployerName,
    "h:X-Mailgun-Variables": JSON.stringify({
      unsubscribe_url: "%unsubscribe_url%",
    }),
  };

  try {
    const result = await mg.messages.create(
      customConfig.mailgun.subdomain + "." + customConfig.domainName,
      data
    );
    console.log("Email sent successfully:", result);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

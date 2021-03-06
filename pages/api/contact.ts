import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

import { emailTemplate } from 'config';

import type { ISendEmail } from 'types';

const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse<ISendEmail>
) => {
  if (req.method === 'POST') {
    const accessToken = `${oAuth2Client.getAccessToken()}`;
    const { name, email, subject, message } = req.body;

    if (name && email && subject && message) {
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GOOGLE_CLIENT_EMAIL,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken,
        },
      });

      try {
        await transport.sendMail({
          from: process.env.GOOGLE_CLIENT_EMAIL,
          to: process.env.NEXT_PUBLIC_EMAIL,
          subject,
          html: emailTemplate({ name, email, subject, message }),
        });
      } catch {
        return res.status(500).json({
          status: 500,
          message: 'Server error',
        });
      }
      return res.status(200).json({ status: 200, message: 'Email was sent' });
    }

    return res.status(404).json({
      status: 404,
      message: 'No data provided',
    });
  }

  return res.status(405).json({
    status: 405,
    message: 'Method not allowed',
  });
};

export default sendEmail;

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

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
        html: `
          <div
            style="
              padding: 2.5rem;
              border-radius: 0.75rem;
              background-color: #000000;
              background-image: radial-gradient(
                at 100% 100%,
                #00b7ce 0px,
                transparent 50%
              ),
              radial-gradient(at 0% 0%, #00b7ce 0px, transparent 50%);
            "
          >
            <a
              style="
                max-width: 600px;
                margin: 0 auto;
                padding: 2.5rem;
                display: block;
                background: #000000;
                color: #ffffff;
                font-size: 1rem;
                font-weight: 700;
                font-family: sans-serif;
                color: #ffffff;
                text-decoration: none;
                border: 1px solid hsla(0, 0%, 100%, 0.1);
                border-top-left-radius: 0.75rem;
                border-top-right-radius: 0.75rem;
              "
            >
              ${process.env.NEXT_PUBLIC_APP_DOMAIN}
            </a>
            <div
              style="
                max-width: 600px;
                margin: 0 auto;
                padding: 2.5rem;
                background: #000000;
                color: #ffffff;
                font-weight: 700;
                font-family: sans-serif;
                border-left: 1px solid hsla(0, 0%, 100%, 0.1);
                border-right: 1px solid hsla(0, 0%, 100%, 0.1);
                border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
                border-bottom-left-radius: 0.75rem;
                border-bottom-right-radius: 0.75rem;
              "
            >
              <div
                style="
                  padding: 2.5rem;
                  border: 1px solid hsla(0, 0%, 100%, 0.1);
                  border-radius: 0.75rem;
                  font-size: 1.5rem;
                "
              >
                ${name}
                <a
                  style="
                    display: block;
                    margin-top: 1rem;
                    font-size: 1rem;
                    text-decoration: none;
                    color: #00b7ce;
                  "
                >
                  ${email}
                </a>
              </div>
              <div
                style="
                  margin-top: 2.5rem;
                  padding: 2.5rem;
                  border: 1px solid hsla(0, 0%, 100%, 0.1);
                  border-radius: 0.75rem;
                  font-weight: 400;
                  color: #888888;
                "
              >
                <p
                  style="
                    color: #ffffff;
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                    margin-bottom: 1rem;
                  "
                >
                  ${subject}
                </p>
                ${message}
              </div>
            </div>
          </div>
        `,
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
};

export default sendEmail;

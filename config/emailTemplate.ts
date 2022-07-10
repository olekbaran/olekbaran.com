import { IContactForm } from 'types';

export const emailTemplate = ({
  name,
  email,
  subject,
  message,
}: IContactForm) => `
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
  </div>`;

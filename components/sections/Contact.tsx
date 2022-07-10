import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CopyToClipboard from 'react-copy-to-clipboard';

import { en, pl } from 'locales';
import { images } from 'assets/images';
import { ContactCard, SecondaryButton, ContactForm } from 'components';

import type { ILinkedInProfile } from 'types';

import styles from 'styles/components/sections/contact.module.scss';

interface IContact {
  linkedInProfile: ILinkedInProfile[];
}

export const Contact: React.FunctionComponent<IContact> = ({
  linkedInProfile,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;
  const tLinkkedIn = locale === 'pl' ? linkedInProfile[1] : linkedInProfile[0];

  const email = process.env.NEXT_PUBLIC_EMAIL;
  const companyLogoAlt = tLinkkedIn.companyLogo.fileName.slice(
    0,
    tLinkkedIn.companyLogo.fileName.indexOf('.')
  );

  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className="heading">{t.home.contact.heading}</h2>
      <div className={styles.contactCards}>
        <ContactCard
          heading={t.home.contact.linkedIn.heading}
          link={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          footer={t.home.contact.linkedIn.footer}
        >
          <div className={styles.linkedIn}>
            <div className={styles.profile}>
              <div className={styles.profile__image}>
                <Image
                  src={images.avatar}
                  placeholder="blur"
                  alt={t.seo.components.images.avatar}
                  width={88}
                  height={88}
                />
              </div>
              <span className={styles.profile__name}>{tLinkkedIn.name}</span>
            </div>
            <div className={styles.workplace}>
              <a
                href={tLinkkedIn.companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={companyLogoAlt}
                className={styles.workplace__logo}
              >
                <Image
                  src={tLinkkedIn.companyLogo.url}
                  layout="fill"
                  alt={companyLogoAlt}
                />
              </a>
              <span className={styles.workplace__name}>
                {tLinkkedIn.workplace}
              </span>
            </div>
          </div>
        </ContactCard>
        <ContactForm />
        <ContactCard
          heading={t.home.contact.email.heading}
          link={`mailto:${email}`}
          footer={t.home.contact.email.footer}
        >
          <div className={styles.email}>
            <address className={styles.address}>
              <span className={styles.address__name}>
                {email?.split('@')[0]}
              </span>
              <span className={styles.address__domain}>
                @{email?.split('@')[1]}
              </span>
            </address>
          </div>
          <CopyToClipboard text={email!} onCopy={onCopyText}>
            <SecondaryButton
              text={`${
                isCopied
                  ? t.home.contact.email.copied
                  : t.home.contact.email.copy
              }`}
            />
          </CopyToClipboard>
        </ContactCard>
      </div>
    </section>
  );
};

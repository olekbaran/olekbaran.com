import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CopyToClipboard from 'react-copy-to-clipboard';

import { en, pl } from 'locales';
import { appRoutes } from 'config';
import { images } from 'assets/images';
import { Button } from 'components/common';
import { ContactCard } from 'components/cards';
import { ContactForm } from 'components/forms';

import type { ILinkedInProfile } from 'types';

import styles from 'styles/components/sections/contact.module.scss';

interface IContact {
  linkedInProfile: ILinkedInProfile;
}

export const Contact: React.FunctionComponent<IContact> = ({
  linkedInProfile,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pl' ? pl : en;

  const sectionId = appRoutes.contact.slug.substring(
    appRoutes.contact.slug.indexOf('#') + 1
  );
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const companyLogoAlt = linkedInProfile.companyLogo.fileName.slice(
    0,
    linkedInProfile.companyLogo.fileName.indexOf('.')
  );

  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id={sectionId} className={styles.contact}>
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
              <span className={styles.profile__name}>
                {linkedInProfile.name}
              </span>
            </div>
            <div className={styles.workplace}>
              <a
                href={linkedInProfile.companyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={companyLogoAlt}
                className={styles.workplace__logo}
              >
                <Image
                  src={linkedInProfile.companyLogo.url}
                  layout="fill"
                  alt={companyLogoAlt}
                />
              </a>
              <span className={styles.workplace__name}>
                {linkedInProfile.workplace}
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
            <Button
              variant="secondary"
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

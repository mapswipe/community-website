import React from 'react';
import { useTranslation, SSRConfig } from 'next-i18next';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Link from 'components/Link';
import LanguageSwitcher from 'components/LanguageSwitcher';

import styles from './styles.module.css';

interface Props extends SSRConfig {
    className?: string;
}

function Navbar(props: Props) {
    const {
        className,
    } = props;

    const { t } = useTranslation('common');

    return (
        <div
            className={_cs(styles.navbar, className)}
        >
            <LanguageSwitcher
                locale="en"
            />
            <LanguageSwitcher
                locale="de"
            />
            <Image
                className={styles.logo}
                src="/logo.svg"
                alt="Mapswipe"
                width={200}
                height={200}
            />
            <div className={styles.routes}>
                <Link
                    href="/[locale]"
                >
                    {t('home-link')}
                </Link>
                <Link
                    href="/[locale]/get-involved"
                >
                    {t('get-involved-link')}
                </Link>
                <Link
                    href="/[locale]/data"
                >
                    {t('data-link')}
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
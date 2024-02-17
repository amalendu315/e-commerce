"use client";
//Default Imports
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

//File Imports
import { HeaderNav } from '../Nav';
import { Gutter } from '../../Gutter';
import { noHeaderFooterUrls } from '../../../constants';
import { Header } from '../../../../payload/payload-types';

//Other Imports
import classes from "./index.module.scss"

const HeaderComponent = ({header}:{header:Header}) => {

    const pathname = usePathname(); 

  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
        <Gutter className={classes.wrap}>
            <Link href="/" className={classes.logo}>
                <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
            </Link>
            <HeaderNav header={header} />
        </Gutter>
    </nav>
  )
}

export default HeaderComponent;
import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from '@heroicons/react/outline'

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>skinPro</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>

            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-528-4235">352-528-4235</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@skinPro.com">support@skinPro.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/about">
                <p>Safety Privacy & Terms</p>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>
          Copyright © 2023 by
          <a href="https://dahmancode.github.io/Portfolio/"> DahmanCode.</a>
        </span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer

import styles from './LayoutApp.module.scss'
import Footer from '@/new-components/Footer'
import React from 'react'
import { HeaderApp } from '../HeaderApp/HeaderApp'

interface LayoutAppProps {
  children: React.ReactNode
}

export const LayoutApp = ({ children }:LayoutAppProps) => {

  return (
    <>
      <HeaderApp />

      <div className={styles.layoutApp}>
        {
          children
        }
      </div>

      <Footer />
    </>
  )
}

/* @flow */
import React from 'react'
import styles from './styles.css'

function SiteHeader ({
  title = 'SiteHeader'
}) {
  return (
    <div className={styles.container}>
      <p>
        {title}
      </p>
      <p>
        {title}
      </p>
      <p>
        {title}
      </p>
      <p>
        {title}
      </p>
      <p>
        {title}
      </p>
      <p>
        {title}
      </p>
    </div>
  )
}

export default SiteHeader

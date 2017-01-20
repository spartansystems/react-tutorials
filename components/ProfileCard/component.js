/* @flow */
import React from 'react'
import styles from './styles.css'

function ProfileCard ({
  name,
  description,
  imageUrl
}) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default ProfileCard

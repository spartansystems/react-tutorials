import React from 'react'

import milligram from 'milligram'

const AVAILABLE_THEMES = {
  'default': 'button',
  'outline': 'button-outline',
  'clear': 'clear'
}

export default function Button ({
  theme = 'default',
  text,
  onClick = () => {}
}) {

  if (!AVAILABLE_THEMES[theme]) {
    throw new Error('unsupported theme', theme)
  }

  return (
    <button
      onClick={onClick}
      className={AVAILABLE_THEMES[theme]}
    >
      {text}
    </button>
  )
}

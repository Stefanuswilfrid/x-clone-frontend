import React from 'react'


import { LikeYellow } from '@/components/Icons'
import { LinkButton, RegularButton } from '@/components/UI'


export function FooterButton() {
//   const { openAuthDialog } = useAuth()

  const isAuthenticated = false

  if (!isAuthenticated) {
    return (
      <RegularButton
        className="mt-3 w-full rounded-full py-2"
        onClick={openAuthDialog}
      >
        Log in with Read.cv
      </RegularButton>
    )
  }

  return (
    <LinkButton
      variant="yellow"
      className="mt-3"
      href="https://read.cv/about/supporters"
    >
      <LikeYellow />
      <span className="text-sm">Become a supporter</span>
    </LinkButton>
  )
}

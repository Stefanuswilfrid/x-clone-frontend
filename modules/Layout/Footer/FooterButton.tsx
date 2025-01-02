import React from 'react'


import { RegularButton } from '@/components/UI/Button/RegularButton'
import { LinkButton } from '@/components/UI/Button/LinkButton'


export function FooterButton() {
//   const { openAuthDialog } = useAuth()

  const isAuthenticated = false

  if (!isAuthenticated) {
    return (
      <RegularButton
        className="mt-3 w-full rounded-full py-2"
        onClick={()=>{}}
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
      <span className="text-sm">Become a supporter</span>
    </LinkButton>
  )
}

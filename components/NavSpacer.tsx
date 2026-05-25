'use client'

import { usePathname } from 'next/navigation'

const NavSpacer = () => {
    const pathname = usePathname()
    if (pathname === '/') return null
    return <div className="h-[72px]" />
}

export default NavSpacer

import { AiOutlineDollar } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { GrStackOverflow } from 'react-icons/gr'
import { GiCottonFlower } from 'react-icons/gi'
import { BsShieldFillPlus } from 'react-icons/bs'
import { HiMoon } from 'react-icons/hi'

interface NavbarLink {
  label: string
  href: string
}

export const navbarLinks: NavbarLink[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Landlord',
    href: '/',
  },
  {
    label: 'Tenants',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
]

// minimumlivingcost
type MinimumLiving = {
  icons: any
  text: string
}

export const minimumLiving: MinimumLiving[] = [
  {
    icons: AiOutlineDollar(),
    text: 'This is some text',
  },
  {
    icons: BiBuildingHouse(),
    text: 'This is some text',
  },
  {
    icons: GrStackOverflow(),
    text: 'This is some text',
  },
  {
    icons: GiCottonFlower(),
    text: 'This is some text',
  },
  {
    icons: BsShieldFillPlus(),
    text: 'This is some text',
  },
  {
    icons: HiMoon(),
    text: 'This is some text',
  },
]

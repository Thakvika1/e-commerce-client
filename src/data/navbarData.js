import { HOME } from '../config/routes'
import { LOGIN } from '../config/routes'
import { REGISTER } from '../config/routes'

export const navbarData = [
  { name: 'Home', link: HOME },
  { name: 'login', link: LOGIN },
  { name: 'register', link: REGISTER },
  { name: 'profile', link: '/user-detail' },
]

import { REGISTER } from '../../../config/routes'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-2">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        Don't have an account?
      </p>
      <Link
        className="text-primary font-bold text-sm hover:underline"
        to={REGISTER}
      >
        Register
      </Link>
    </div>
  )
}

export default Footer

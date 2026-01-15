import { LOGIN } from '../../../config/routes'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 mt-2">
      <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
        Already have an account?{' '}
        <Link
          className="text-primary font-black hover:underline ml-1"
          to={LOGIN}
        >
          Login
        </Link>
      </p>
    </div>
  )
}

export default Footer

import { LOGIN } from '../../../config/routes'

const Footer = () => {
  return (
    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 mt-2">
      <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
        Already have an account?{' '}
        <a
          href={LOGIN}
          className="text-primary font-black hover:underline ml-1"
        >
          Login
        </a>
      </p>
    </div>
  )
}

export default Footer

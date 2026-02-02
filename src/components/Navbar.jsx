import { 
  Bars3Icon, 
  FireIcon, 
  ShieldCheckIcon,
  MapPinIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

export default function Navbar({ currentView, onHomeClick }) {
  return (
    <div className="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
      border-b border-gray-800/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="flex-1 min-w-0 pr-4">
        <a href="#" className="btn btn-ghost gap-3 text-xl hover:bg-red-500/10 transition-all duration-300 group min-w-0">
          <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30 group-hover:border-red-500/50 transition-colors flex-shrink-0">
            <ShieldCheckIcon className="h-6 w-6 text-red-400" />
          </div>
          <div className="flex flex-col items-start min-w-0 flex-1">
            <span className="text-fitforge font-bold text-gray-100 uppercase tracking-tight text-lg whitespace-nowrap">
              FITFORGE
            </span>
            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
              Workout Control
            </span>
          </div>
        </a>
      </div>
      
      <div className="flex-none">
        {/* Mobile menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label 
            tabIndex={0} 
            className="btn btn-ghost btn-square hover:bg-red-500/10 transition-all duration-300 group"
          >
            <Bars3Icon className="h-6 w-6 text-gray-400 group-hover:text-red-400 transition-colors" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl 
              bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700/50 w-52"
          >
            <li>
              <button
                onClick={onHomeClick}
                className="hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"
              >
                <span className="font-mono uppercase tracking-wider text-sm">HOME</span>
              </button>
            </li>
          </ul>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-1">
          {/* Navigation items removed - only home button available */}
        </div>
      </div>
      
      {/* HOME Button */}
      <div className="flex items-center gap-2 px-3 border-l border-gray-800/50">
        <button
          onClick={onHomeClick}
          className="btn btn-ghost hover:bg-red-500/10 transition-all duration-300 group px-3"
          title="Back to Homepage"
        >
          <span className="font-mono uppercase tracking-wider text-sm text-gray-400 group-hover:text-red-400 transition-colors">
            HOME
          </span>
        </button>
      </div>
      
      {/* Status indicator */}
      <div className="hidden lg:flex items-center gap-2 px-3 border-l border-gray-800/50">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
          Active
        </span>
      </div>
    </div>
  )
}

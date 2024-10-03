
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBell, faBookBookmark, faEllipsisH, faEnvelope, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag'

const NavItem = ({icon, text}) => (
      <div className='flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200'>
        <FontAwesomeIcon icon={icon} className='text-2xl mr-4'/>
        <span className="text-xl hidden xl:inline">{text}</span>
      </div>
)

export function Sidebar() {
    return (
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
       <FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl m-4'/>
       
       <nav>

       <NavItem icon={faHome} text='Home'/>
       <NavItem icon={faHashtag} text='Home'/>
       <NavItem icon={faBell} text='Home'/>
       <NavItem icon={faEnvelope} text='Home'/>
       <NavItem icon={faBookBookmark} text='Home'/>
       <NavItem icon={faUserFriends} text='Home'/>
       <NavItem icon={faTwitter} text='Home'/>
       <NavItem icon={faUser} text='Home'/>
       <NavItem icon={faEllipsisH} text='Home'/>
       
       </nav>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookBookmark, faEllipsisH, faEnvelope, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import PropTypes from 'prop-types';

const NavItem = ({ icon, text }) => (
  <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
    <FontAwesomeIcon icon={icon} className="text-2xl mr-4" />
    <span className="text-xl hidden xl:inline">{text}</span>
  </div>
);

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-blue-400 text-3xl m-4"
      />

      <nav>
        <NavItem icon={faHome} text="Home" />
        <NavItem icon={faHashtag} text="Explore" />
        <NavItem icon={faBell} text="Notifications" />
        <NavItem icon={faEnvelope} text="Messages" />
        <NavItem icon={faBookBookmark} text="Bookmarks" />
        <NavItem icon={faUserFriends} text="Friends" />
        <NavItem icon={faTwitter} text="Twitter" />
        <NavItem icon={faUser} text="Profile" />
        <NavItem icon={faEllipsisH} text="More" />
      </nav>
    </div>
  );
}
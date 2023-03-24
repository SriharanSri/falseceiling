import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTelegram,
  faTwitter,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/redmedia_studios_manamadurai/?hl=en",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/profile.php?id=100064728217261&locale=en_US",
  },
  { icon: faWhatsapp, url: "https://wa.me/+916380194201" },
];
export const StickySocial = () => {
  return (
    <div className="sticky_social-icons">
      {socialIcons &&
        socialIcons.map(({ icon, url }, index) => (
          <a key={index} target="_blank" className="social__icon" href={url}>
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
    </div>
  );
};

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

function Header() {
  return (
    <div className="header">
      <div className="header__info">
        <Icon icon={locationIcon} className="header-icon" />
        <h2>Wildfire Tracker</h2>
      </div>
    </div>
  );
}

export default Header;

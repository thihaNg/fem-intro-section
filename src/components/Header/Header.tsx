import Menu, { MenuItem } from "../Menu/Menu"
import "./Header.css"
import IconCalendar from "./../../assets/images/icon-calendar.svg"
import IconPlanning from "./../../assets/images/icon-planning.svg"
import IconReminders from "./../../assets/images/icon-reminders.svg"
import IconTodo from "./../../assets/images/icon-todo.svg"
import IconMenu from "./../../assets/images/icon-menu.svg"
import IconCloseMenu from "./../../assets/images/icon-close-menu.svg"
import Logo from "./../../assets/images/logo.svg"
import Button from "../Button/Button"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"

type MobileNavProps = {
  onCloseClick: () => void
}

const MobileNavBar: React.FC<MobileNavProps> = ({
  onCloseClick
}) => {
  return (
    <>
      <div
        className="mobile-nav-backdrop">

      </div>
      <div
        className="mobile-nav-container">
        <img
          className="icon-close-menu"
          src={IconCloseMenu}
          alt="Icon Close Menu"
          width={18}
          height={18}
          onClick={onCloseClick} />
        <Menu
          variant="tree"
          menuHeader="Features">
          <MenuItem
            text="Todo List"
            imgSrc={IconTodo} />
          <MenuItem
            text="Calendar"
            imgSrc={IconCalendar} />
          <MenuItem
            text="Reminders"
            imgSrc={IconReminders} />
          <MenuItem
            text="Planning"
            imgSrc={IconPlanning} />
        </Menu>
        <Menu
          variant="tree"
          menuHeader="Company">
          <MenuItem
            text="History" />
          <MenuItem
            text="Our Team" />
          <MenuItem
            text="Blog" />
        </Menu>
        <span
          className="text-nav">Careers</span>
        <span
          className="text-nav">About</span>
        <div
          className="auth-wrapper-mobile">
          <Button
            text="Login"
            variant="text" />
          <Button
            text="Register"
            variant="outlined" />
        </div>
      </div>
    </>
  )
}

const DesktopNavBar: React.FC = () => {
  return (
    <div className="desktop-nav-container">
      <Menu
        variant="popup"
        menuHeader="Features">
        <MenuItem
          text="Todo List"
          imgSrc={IconTodo} />
        <MenuItem
          text="Calendar"
          imgSrc={IconCalendar} />
        <MenuItem
          text="Reminders"
          imgSrc={IconReminders} />
        <MenuItem
          text="Planning"
          imgSrc={IconPlanning} />
      </Menu>
      <Menu
        variant="popup"
        menuHeader="Company">
        <MenuItem
          text="History" />
        <MenuItem
          text="Our Team" />
        <MenuItem
          text="Blog" />
      </Menu>
      <span
        className="text-nav">Careers</span>
      <span
        className="text-nav">About</span>
      <div
        className="auth-wrapper-desktop">
        <Button
          text="Login"
          variant="text" />
        <Button
          text="Register"
          variant="outlined" />
      </div>
    </div>
  )
}

const Header: React.FC = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <div
      className="header-container">
      <img
        src={Logo}
        alt="Logo"
        width={80}
        height={30} />
      {
        isTabletOrMobile &&
        <img
          className="icon-menu"
          src={IconMenu}
          alt="Icon Menu"
          width={18}
          height={18}
          onClick={handleMobileNav} />
      }
      {
        mobileNavOpen &&
        <MobileNavBar
          onCloseClick={handleMobileNav} />
      }
      {
        !isTabletOrMobile &&
        <DesktopNavBar />
      }
    </div>
  )

}

export default Header;
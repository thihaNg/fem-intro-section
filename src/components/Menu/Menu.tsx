import "./Menu.css"
import IconArrowDown from "./../../assets/images/icon-arrow-down.svg"
import IconArrowUp from "./../../assets/images/icon-arrow-up.svg"
import { useState } from "react"

type MenuItemProps = {
  imgSrc?: string
  text: string
}

export const MenuItem: React.FC<MenuItemProps> = ({
  imgSrc,
  text
}) => {
  return (
    <div
      className="menu-item-container">
      {
        imgSrc &&
        <img
          src={imgSrc}
          alt="Menu Item"
          width={18}
          height={18} />
      }
      <span>{text}</span>
    </div>
  )
}

type MenuProps = {
  menuHeader: string
  children: React.ReactNode[]
  variant: "popup" | "tree"
}

const Menu: React.FC<MenuProps> = ({
  menuHeader,
  children,
  variant
}) => {

  const [open, setOpen] = useState(false);

  const handleMenuOpenClose = () => {
    console.log("Menu clicking")
    setOpen(!open);
  }

  return (
    <>
      {
        open && variant === "popup" &&
        <div
          onClick={handleMenuOpenClose}
          className="menu-backdrop">

        </div>
      }
      <div
        className="menu-container">
        <div
          className="menu-header"
          onClick={handleMenuOpenClose}>
          <span>{menuHeader}</span>
          <img
            src={open ? IconArrowUp : IconArrowDown}
            alt="Icon Arrow"
            width={16}
            height={10} />
        </div>
        {
          open &&
          <div>
            <div
              className={variant === "popup" ? "popup-menu" : "tree-menu"}>
              {
                children.map(child => {
                  return child
                })
              }
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Menu;
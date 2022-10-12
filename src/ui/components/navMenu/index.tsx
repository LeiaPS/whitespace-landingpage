import { useState } from "react"
import { NavigationType } from "../../../ts/navigation"
import { NavMenuItem } from "../navMenuItem"

type NavMenuProps = {
    items?: NavigationType[]
}
export const NavMenu = ({ items }: NavMenuProps) => {
    const [isActive, setIsActive] = useState<number | null>(null)
    const handleNavigation = (index: number) => {
        setIsActive(isActive === index ? null : index)
    }
    return (
        <ul className="flex gap-8 ">
            {items && items.length > 0 && items.map((item, index) => (
                <NavMenuItem onClick={() => handleNavigation(index)} isActive={isActive === index} items={item.items} className="relative cursor-pointer text-white text-lg font-medium flex items-center justify-between" text={item.name} key={`navmenu-${index}`} />
            ))}
        </ul>
    )
}
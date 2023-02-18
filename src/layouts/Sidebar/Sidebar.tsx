import Link from 'next/link'
import React, {useState} from 'react'
import { ArrowBackIosNew, DashboardOutlined } from '@mui/icons-material';
import { YarigaLogo, Logo } from "../../assets"
import { Menu } from '../../assets/index'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div>
      <div className={`bg-ligth-white h-screen p-5 pt-8 ${showSidebar ? 'w-[230px]' : 'w-20'} duration-300 relative`}>        
        <ArrowBackIosNew className={`bg-ligth-purple text-ligth-white text-3xl
        rounded-full absolute -right-3 top-9 mt-10 border cursor-pointer
        ${!showSidebar && 'rotate-180 transition-transform duration-300'} z-10`} onClick={() => setShowSidebar(!showSidebar)}/>
        {showSidebar ?
        <div className={`inline-flex -mt-[300px] -ml-[30px] cursor-pointer ${showSidebar && "rotate-[360deg]"}`}>
            <YarigaLogo /> 
        </div>
          :
        <div className={`inline-flex -mt-[300px] -ml-[30px] cursor-pointer duration-500`}>
            <Logo /> 
        </div>
        }

        <ul>
          {Menu.map((menu, i) => (
            <>
              <li key={i} className={`text-gray-500 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-ligth-purple hover:text-ligth-white rounded-xl mt-2 -ml-9 ${showSidebar ? 'w-48' : 'w-[50px] h-[50px]' } h-16`}>
                <Link href={menu.to} className="hover:text-ligth-white ml-1 -mt-1">
                  <span className={`text-2xl`}>
                  {menu.icon ? menu.icon : <DashboardOutlined />}
                  </span>
                  <span className={`text-base flex-1 ml-2 font-semibold  ${!showSidebar && "hidden"}`}>{menu.title}</span>
                </Link>
              </li>
           </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
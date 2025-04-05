import React from 'react'
import HeaderSection from '../HeaderSection'
import logoImg from '../../../assets/images/logo.png'
import { navData } from '../../dummyData/navData'


const Navbar = () => {
  return (
    <>
        <HeaderSection/>
    <div className='max-w-containerWidth mx-auto'>
        <div>
            <div className="flex justify-between items-center h-[110px]">
                <div>
                <img src={logoImg} alt="Logo" className="w-40" />
                </div>
                    <div>
                    <div>
                        <ul className='flex gap-5'>
                        {navData.map((nav) =>(
                            <li key={nav.id}>
                            <a href={nav.url} className='text-[#444444] text-sm font-semibold font-poppins hover:text-[#D80D07] duration-300'>
                            {nav.title}
                            </a>
                            </li>
                        ))}
                        </ul> 
                    </div>
                    <div>
                    
                    </div>
                    </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Navbar
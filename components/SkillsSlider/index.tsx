'use client'
import { FC, useLayoutEffect } from 'react'
import { register } from 'swiper/element/bundle'
import Language from '../../public/icons/Language.svg'
import Technologies from '../../public/icons/Technologies.svg'
import MiscIcon from '../../public/icons/Misc.svg'
import { renderToString } from 'react-dom/server'
import TechnologiesSlider from './Slides/technologies'
import Languages from './Slides/languages'
import Misc from './Slides/misc'

register()

const SkillsSlider: FC = ({}) => {
 useLayoutEffect(() => {
  const swiperEl = document.querySelector(
   'swiper-container'
  )

  const params = {
   injectStyles: [
    `
      @media (max-width: 768px) {
        .swiper-pagination-bullet {
            width: 64px !important;
        }
        .swiper-pagination-bullet > svg {
            display: none !important;
        }
      }
      .swiper {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination {
        display: flex;
        position: relative !important;
        left: auto !important;
        width: fit-content !important;
        margin-top: 20px;
      }
      .swiper-pagination-bullet {
        width: 128px;
        height: 128px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
        color: #475569;
        border-top: 2px solid #475569;
        background: transparent;
        opacity: 1;
      }
      
      .swiper-pagination-bullet > svg {
        width: 64px;
        height: fit-content;
      }

      .swiper-pagination-bullet-active {
        color: #94A3B8;
        border-top: 2px solid #94A3B8;
      }
      `,
   ],
   pagination: {
    clickable: true,
    renderBullet: function (index, className) {
     // Define an array of custom icons
     const customIcons = [
      <Language key='lan-icon' />, // Use your custom React component here
      <Technologies key='tec-icon' />, // Use another custom React component here
      <MiscIcon key='mis-icon' />, // Use another custom React component here
      // Add more custom icons as needed...
     ]

     return `
        <span class="${className}">
          ${renderToString(customIcons[index])}
        </span>
      `
    },
   },
  }

  // @ts-ignore
  Object.assign(swiperEl, params)

  // @ts-ignore
  swiperEl.initialize()
 }, [])

 return (
  // @ts-ignore
  <swiper-container
   class='h-full w-full'
   init='false'
   loop='true'>
   {/* @ts-ignore*/}
   <swiper-slide>
    <Languages />
    {/* @ts-ignore*/}
   </swiper-slide>
   {/* @ts-ignore*/}
   <swiper-slide>
    <TechnologiesSlider />
    {/* @ts-ignore*/}
   </swiper-slide>
   {/* @ts-ignore*/}
   <swiper-slide>
    <Misc />
    {/* @ts-ignore*/}
   </swiper-slide>
   {/* @ts-ignore*/}
  </swiper-container>
 )
}

export default SkillsSlider

// import { useState } from 'react'
//  引入 _header.module.scss
import style from './_header.module.scss'
import Navbar from './navbar'

export default function Header() {
  // // 滑鼠移入，文字改成中文效果
  // const [isHover, setIsHover] = useState(false)

  // const handleMouseEnter = () => {
  //   setIsHover(true)
  // }

  // const handleMouseLeave = () => {
  //   setIsHover(false)
  // }

  // const flipClass = isHover ? style['flip'] : ''

  return (
    <>
      <header className={`bg-dark ${style['header']}`}>
        <Navbar />
      </header>
    </>
  )
}

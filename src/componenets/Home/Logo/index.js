import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const solidLogoRef = useRef(null)

  useEffect(() => {
    const solidLogo = solidLogoRef.current

    const animation = () => {
      solidLogo.style.opacity = '1'
    }

    animation()
  }, [])

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript Developer"
      />
    </div>
  )
}

export default Logo

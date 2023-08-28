import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutStart } from '../../store/user/user.action'

import { useResponsive } from '../../hooks/useResponsive'

import { SignOutIcon, LogInIcon } from '../../assets/icons'

import { StyledGnbIconButton } from './styles'

const AuthControlButton = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  const signOutUser = () => dispatch(signOutStart())

  const { isMobile } = useResponsive()

  return (
    <>
      {currentUser ? (
        <StyledGnbIconButton className="signout" onClick={signOutUser}>
          <SignOutIcon />
          {isMobile ? (
            <p className="signout-text-sm">Sign Out</p>
          ) : (
            <p className="signout-text-lg">Sign Out</p>
          )}
        </StyledGnbIconButton>
      ) : (
        <StyledGnbIconButton className="login" as={Link} to="/log-in">
          <LogInIcon />
          {isMobile ? (
            <p className="login-text-sm">Log In</p>
          ) : (
            <p className="login-text-lg">Log In</p>
          )}
        </StyledGnbIconButton>
      )}
    </>
  )
}

export default AuthControlButton
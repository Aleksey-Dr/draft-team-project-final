import logo from '../../images/goose-1-mob.png';

import {
    Wrapper,
    LogoLink,
} from './Logo.styled';

const Logo = () => {
    return (
        <Wrapper>
            <LogoLink href="#">
                <img src={logo} alt="logo" />
                G<span>oo</span>seTrack
            </LogoLink>
        </Wrapper>
    );
};

export default Logo;
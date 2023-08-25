import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import icons from '../../images/icons.svg';

import {
    Container,
    Wrapper,
    TitleSideBar,
} from './SideBar.styled';

const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <svg width="24" height="24">
                    <use href={ icons + "#icon-x-close" }></use>
                </svg>
            </Wrapper>
            <TitleSideBar>
                User Panel
            </TitleSideBar>
            <UserNav />
        </Container>
    );
};

export default SideBar;
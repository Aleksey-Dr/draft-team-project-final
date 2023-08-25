import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import icons from '../../images/icons.svg';

import {
    Container,
    Wrapper,
    UserTitle,
} from './Header.styled';

const Header = () => {
    return (
        <header>
            <Container>
                <Wrapper>
                    {/* Add size svg-icon for breakpoint from 376px */}
                    <svg width="24" height="24">
                        <use href={ icons + "#icon-menu-01" }></use>
                    </svg>
                </Wrapper>
                <UserTitle>
                    User Profile
                </UserTitle>
                <AddFeedbackBt />
                <ThemeToggler />
                <UserInfo />
            </Container>
        </header>
    )
}

export default Header;
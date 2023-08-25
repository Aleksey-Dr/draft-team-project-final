import icons from '../../images/icons.svg';

import {
  Wrapper,
} from './ThemeToggler.styled';

const ThemeToggler = () => {
    return (
        <Wrapper>
            {/* Add size svg-icon for breakpoint from 376px */}
            <svg width="24" height="24">
                <use href={ icons + "#icon-moon" }></use>
            </svg>
        </Wrapper>
    );
};

export default ThemeToggler;
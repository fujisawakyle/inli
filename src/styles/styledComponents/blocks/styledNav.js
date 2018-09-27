import styled, { css } from "styled-components";
import Link from "gatsby-link";

import { A } from '../elements';

import { fromThemeProps } from "../../../helpers/utilities";
import { flex } from "../../../helpers/mixins";

const StyledNav = styled.div`
    ${flex({ dir: "column", jc: "space-between", ai: "center" })}
`

StyledNav.LinkContainer = styled.div`
    ${flex({ dir: "row", jc: "center", ai: "center" })}
`

StyledNav.Link = styled(Link)`
    display: ${(props) => {
        if (props.nestedState) {
            return "flex"
        }
        return "none"
    }};
    margin-bottom: 0.5em;
    margin-right: 0.4em;
    margin-left: 0;

    color: #f8f8f8;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;   
   
    &:hover {
        text-decoration: underline;
    }

    ${(props) => props.nested && css`
        margin-left: 2em;
        text-transform: none;
    `}
`
StyledNav.NestedLink = styled(A)`
    display: ${(props) => {
        if (props.nestedState) {
            return "flex"
        }
        return "none"
    }};
    margin-bottom: .4em;
    margin-left: 2em;
    text-transform: none;

    color: #f8f8f8;
    font-weight: normal;
    text-decoration: none;
   
    &:hover {
        text-decoration: underline;
    }
`

StyledNav.Arrow = styled.img`
    
    width: 15px;
    margin-bottom: 0.5em;
    padding-bottom: 1px;
    padding-top: 1px;
    transform: rotate(180deg);

    &:hover {
        border-bottom:none;
        border-top: 2px solid #fff;
        cursor: pointer;
    }

    ${(props) => props.nestedState && css`
        transform: rotate(0);

        &:hover {
            border-bottom: 2px solid #fff;
            border-top: none;
        }
    `}
`

StyledNav.Divider = styled.div`
    margin: 0.5em auto 1em;
    width: 30px;
    
    border-bottom: 6px solid ${fromThemeProps("orange")};
`

export default StyledNav;
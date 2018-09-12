import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { scroller } from "react-scroll";

import styles from "../styles/burgerMenuCss";
import StyledNav from "../styles/styledComponents/blocks/styledNav";
import headerData from "../data/data.json";
import carrot from "../assets/png/carrot--white.png";

class BurgerMenu extends Component {
  state = {
    isOpen: false,
    showRootNested: false,
    showFranchiseNested: false,
    showStudentsNested: false
  };

  // REACT LIFECYCLE

  render() {
    return (
      <Menu isOpen={this.state.isOpen} right styles={styles}>
        <StyledNav>
          {this.renderLink(headerData.rootNavLink.linkText, headerData.rootNavLink.path, headerData.rootNavLink.nestedState, false)}
          {this.renderNestedLinks('rootNestedLinks', headerData.rootNavLink.nestedState)}
          {this.renderLink(headerData.franchiseNavLink.linkText, headerData.franchiseNavLink.path, headerData.franchiseNavLink.nestedState, false)}
          {this.renderNestedLinks('franchiseNestedLinks', headerData.franchiseNavLink.nestedState)}
          {this.renderLink(headerData.studentsNavLink.linkText, headerData.studentsNavLink.path, headerData.studentsNavLink.nestedState, false)}
          {this.renderNestedLinks('studentsNestedLinks', headerData.studentsNavLink.nestedState)}
        </StyledNav>
      </Menu>
    )
  }

  // PARTIALS

  renderNestedLinks = (navLinks, nestedState) => {
    return headerData[navLinks].map(link => this.renderLink(link.linkText, link.path, nestedState, 'nested'))
  }

  renderLink = (linkText, path, nestedState, nested) => {
    let renderLink;

    if (nested || (nestedState == false && nested == false)) {
      renderLink = linkText;
    } else {
      renderLink = (
        <div>
          {linkText}
        </div>
      )
    }

    if (nested) {
      return (
        <StyledNav.LinkContainer>
          <StyledNav.NestedLink
            nested={nested}
            key={path}
            href={path}
            nestedState={this.state[nestedState]}
            onClick={() => {
              this.closeMenu();
            }}
          >
            {renderLink}
          </StyledNav.NestedLink>
        </StyledNav.LinkContainer>
      )
    }
    return (
      <StyledNav.LinkContainer>

        <StyledNav.Link
          nested={nested}
          key={path}
          to={path}
          nestedState={true}
          onClick={() => {
            this.closeMenu();
          }}
        >
          {renderLink}
        </StyledNav.Link>

        <StyledNav.Arrow
          nestedState={this.state[nestedState]}
          src={carrot}
          onClick={() => {
            this.toggleState(nestedState);
            this.setState({ isOpen: true });
          }}
        />
      </StyledNav.LinkContainer>
    );
  }

  // HELPERS

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ isOpen: false })
  }

  toggleState(toToggle) {
    const currentState = this.state[toToggle];
    this.setState({ [toToggle]: !currentState })
  }

  scrollTo = element => {
    console.log(element);
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }
}

export default BurgerMenu;

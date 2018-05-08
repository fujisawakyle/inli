import React, { Component } from 'react';
import { Container, Title, Subtitle, HR } from './FranchiseeSection.style';
import { RedButton } from '../../components/Buttons/Buttons.style';
import Link from 'gatsby-link';

export default class FranchiseeSection extends Component {
  state = {};

  trackClick = () => {
    window.dataLayer.push({
      event: 'franchiseeReroute',
      anchorType: 'reroute'
    });
  };

  render() {
    return (
      <Container>
        <Title> Are you a franchisee? </Title>
        <HR />
        <Subtitle>
          Learn how McDonald's refusal to commit to a meaningful policy could
          impact your business.
        </Subtitle>
        <Link onClick={this.trackClick} to="/franchise">
          <RedButton>Learn more</RedButton>
        </Link>
      </Container>
    );
  }
}

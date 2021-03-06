// Copyright 2017-2018 @polkadot/light-apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, IdentityCard } from '@polkadot/ui-components';

import routing from '../routing';
import NotFound from './NotFound';

type Props = RouteComponentProps & {};

const unknown = {
  Component: NotFound,
  name: ''
};

const ID_CARD_ACTIONS = (name: string) => {
  switch (name) {
    case 'Identity':
      return {
        'value': 'Transfer Balance',
        'to': 'Transfer'
      };
      break;
    case 'Transfer':
      return {
        'value': 'Manage Accounts',
        'to': 'Identity'
      };
      break;
    default:
      return {
        'value': 'Transfer Balance',
        'to': 'Transfer'
      };
      break;
  }
};

// @ts-ignore
@(withRouter as any)
class Content extends React.Component<Props> {
  handleRouteChange = (to?: string) => {
    const { history, location } = this.props;

    if (!to) {
      const current = location.pathname.slice(1);
      to = ID_CARD_ACTIONS(current)['to'];
    }

    history.push(`/${to}`);
  }

  render () {
    const { location } = this.props;

    const app = location.pathname.slice(1) || '';
    const { Component, name } = routing.routes.find((route) =>
      !!(route && app.indexOf(route.name) === 0)
    ) || unknown;

    return (
      <Container>
        <IdentityCard
          address={'7qroA7r5Ky9FHN5mXA2GNxZ79ieStv4WYYjYe3m3XszK9SvF'}
          goToRoute={this.handleRouteChange}
          value={ID_CARD_ACTIONS(name)['value']}
          />
        <Component basePath={`/${name}`} />
      </Container>
    );
  }
}

// FIXME:
// address should come from Keyring

export default Content;

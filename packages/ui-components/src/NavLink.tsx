// Copyright 2017-2018 @polkadot/light-apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { NavLinkSmall } from './Shared.styles';

type Props = {
  value: string,
  onClick: () => void
};

export default class NavLink extends React.PureComponent<Props> {
  render () {
    const { onClick, value } = this.props;

    return (
      <NavLinkSmall onClick={onClick}>
        {value}
      </NavLinkSmall>
    );
  }
}

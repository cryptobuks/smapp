// @flow
import React from 'react';
import styled from 'styled-components';
import { SmRadioButton } from '/basicComponents';
import type { RadioEntry } from './SmRadioButton';

// $FlowStyledIssue
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  user-select: none;
  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none;
      opacity: 0.4;
  `};
`;

type Props = {
  onPress: (selection: RadioEntry) => void,
  data: RadioEntry[],
  disabled?: boolean
};

type State = {
  radioSelected: number | string
};

class SmRadioGroup extends React.Component<Props, State> {
  state = {
    radioSelected: -1
  };

  render() {
    const { data, disabled } = this.props;
    const { radioSelected } = this.state;
    return (
      <Root disabled={disabled}>
        {data.map((val) => (
          <SmRadioButton key={val.id} {...val} radioSelected={radioSelected} onSelect={this.handleSelect} />
        ))}
      </Root>
    );
  }

  handleSelect = (selection: RadioEntry) => {
    const { onPress } = this.props;
    const { id, label } = selection;
    this.setState(
      {
        radioSelected: selection.id
      },
      () => onPress({ id, label })
    );
  };
}

export default SmRadioGroup;

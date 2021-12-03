/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    height: 8,
    borderRadius: 4,
  },
  'medium': {
    height: 12,
    borderRadius: 4,
  },
  'large': {
    height: 24,
    borderRadius: 8,
    padding: 4,
  },
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size} style={SIZES[size]} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <Progress value={value} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  background: linear-gradient(90deg, ${COLORS.primary} 0% ${props => props.value}%, transparent ${props => props.value}% 100%);
  height: 100%;
  border-radius: ${props => props.size === 'large' ? '4px' : 'inherit'};

`

export default ProgressBar;

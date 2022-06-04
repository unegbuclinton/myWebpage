import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

const Button = ({ children, className, pill, type, large, alias, ...rest }) => {
  return (
    <ButtonWrapper
      alias={alias}
      pill={pill}
      className={className}
      type={type}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  cursor: pointer;
  /* width: 100%; */
  padding: ${({ large }) => (large ? '1.6rem 0' : '1.1rem 0')};
  border-radius: ${({ pill }) => (pill ? '4rem' : '')};

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 4rem;
      padding: 0.65rem 0;
      width: 9.173rem;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
      border: none;
      outline: none;
    `};
  ${({ action }) =>
    action &&
    css`
      padding: 1.1rem 2.7rem;
      border-radius: 3.6304px;
      width: 12.4rem;
    `};
  ${({ auth }) =>
    auth &&
    css`
      border-radius: 0.5rem;
      /* height: 6.4rem; */
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: ${COLORS.white};
    `};
  ${({ invert }) =>
    invert &&
    css`
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS['moore-grey']};
      color: ${COLORS['moore-grey']};
    `};
`;

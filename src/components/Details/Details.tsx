import styled from 'styled-components';

const IntroDetails = styled.p`
  font-family: Ubuntu;
  font-size: clamp(0.9375rem, 4vw + 0.5rem, 1.25rem);
  line-height: clamp(1.5rem, 4vw + 0.5rem, 1.75rem);
  font-weight: 400;
  color: #fff;
`;

const Details = styled.p`
  font-family: Ubuntu;
  font-size: clamp(0.9375rem, 4vw + 0.5rem, 1rem);
  line-height: clamp(1.5rem, 4vw + 0.5rem, 1.75rem);
  font-weight: 400;
  color: ${(props) => props.color};
`;

Details.defaultProps = {
  color: 'hsl(207, 13%, 34%)',
};

export { Details, IntroDetails };

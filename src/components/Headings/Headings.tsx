import styled from 'styled-components';

const Big = styled.h1`
  font-family: 'Overpass';
  font-weight: 600;
  font-size: clamp(2rem, 5vw + 1rem, 3.75rem);
  color: ${(props) => props.color};
`;

const Medium = styled.h2`
  font-family: 'Overpass';
  font-weight: 600;
  font-size: clamp(1.5rem, 1vw + 1rem, 2.375rem);
  color: hsl(208, 49%, 24%);
`;

const Small = styled.h3`
  font-family: 'Overpass';
  font-weight: 600;
  font-size: clamp(1.5rem, 1vw + 1rem, 1.75rem);
  color: hsl(208, 49%, 24%);
`;

const Special = styled.h2`
  font-family: 'Overpass';
  font-weight: 600;
  font-size: clamp(2.25rem, 1vw + 1rem, 2.5rem);
  color: ${(props) => props.color};
`;

Big.defaultProps = {
  color: 'hsl(208, 49%, 24%)',
};
Special.defaultProps = {
  color: 'hsl(208, 49%, 24%)',
};

export { Big, Medium, Small, Special };

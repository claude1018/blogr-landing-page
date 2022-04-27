import styled from 'styled-components';

const BaseButton = styled.button`
  all: unset;
  font-family: 'Ubuntu';
  font-size: 0.875rem;
  width: clamp(7.5rem, 2vw + 1rem, 8.75rem);
  height: clamp(2.625rem, 1vw + 1rem, 3.125rem);
  border-radius: 1.75rem;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

const TransparentButton = styled(BaseButton)`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
`;

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(
    to right,
    hsl(13, 100%, 72%),
    hsl(353, 100%, 62%)
  );
  color: #fff;
`;

const SecondaryButton = styled(BaseButton)`
  background: #fff;
  color: hsl(353, 100%, 62%);
`;

export { TransparentButton, PrimaryButton, SecondaryButton };

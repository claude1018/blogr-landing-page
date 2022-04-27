import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-size: 1.125rem;
  color: #2a3642;
`;

const DropdownContainer = styled.div`
  border-radius: 0.5rem;
  text-align: center;
`;
const DropdownTitle = styled.a`
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: #2a3642;
  cursor: pointer;
  font-weight: bold;
`;

const DropdownItemsContainer = styled.ul`
  padding: 1rem;
  background: #efeff1;
  border-radius: 0.5rem;
  margin: 0 0 1.2rem 0;
`;

const DropdownItem = styled.li`
  padding: 0.625rem;
  list-style: none;
`;

const DropdownLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #6e7176;
`;

export {
  DropdownContainer,
  DropdownTitle,
  DropdownItemsContainer,
  DropdownItem,
  DropdownLink,
  Link,
};

import styled from 'styled-components';

const ListTitle = styled.p`
  font-family: 'Ubuntu';
  font-weight: bold;
  color: #fff;
`;

const ListItem = styled.li`
  list-style: none;
`;

const ListLink = styled.a`
  font-family: 'Ubuntu';
  font-weight: normal;
  color: #b9babf;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { ListTitle, ListItem, ListLink };

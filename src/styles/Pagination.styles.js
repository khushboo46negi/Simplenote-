import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PageItem = styled.li`
  display: inline;
  margin: 0 0.5rem;
`;

export const PageLink = styled.a`
  cursor: pointer;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

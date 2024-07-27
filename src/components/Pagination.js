import React from 'react';
import { PaginationWrapper, PageItem, PageLink } from '../styles/Pagination.styles';

const Pagination = ({ totalNotes, notesPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <ul>
        {pageNumbers.map(number => (
          <PageItem key={number}>
            <PageLink onClick={() => paginate(number)} href="#">
              {number}
            </PageLink>
          </PageItem>
        ))}
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;

/* import React from 'react';

const Container = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space('space-04')};
  width: fit-content;
`;

const Dot = styled.div`
  height: ${({ theme }) => theme.size('shape-size-action-02')};
  width: ${({ theme }) => theme.size('shape-size-action-02')};
  border-radius: ${({ theme }) => theme.borderRadius('border-radius-circle')};
  background-color: ${({ theme, active }) =>
    active ? theme.color('shape-color-surface-primary') : '#ffffff99'};
`;

function Pagination({ pages, activePage, ...props }) {
  return (
    <Container
      role="navigation"
      aria-label={`Paginación con ${pages} páginas`}
      aria-roledescription="pagination"
      {...props}
    >
      {Array.from(Array(pages).keys()).map((dot, index) => (
        <Dot
          key={index}
          active={activePage === index + 1}
          role="button"
          aria-label={`Página ${index + 1}${activePage === index + 1 ? ', página actual' : ''}`}
        />
      ))}
    </Container>
  );
}

export default Pagination;
 */
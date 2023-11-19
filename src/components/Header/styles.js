import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundCoor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};

  button {
    font-size: ${({ theme }) => theme.spacing.medium};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

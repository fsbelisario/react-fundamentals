import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.postBackgroundCoor};

  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: calc(${({ theme }) => theme.spacing.small}/2);

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    display: inline-block;
    
    & + a {
      margin-left: ${({ theme }) => theme.spacing.medium};
    }
  }
`
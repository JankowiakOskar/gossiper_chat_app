import styled from 'styled-components';

export const Panel = styled.div`
  width: 100%;
  height: 100%;
`;

export const MessagesWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.5rem ${({ theme }) => theme.colors.darkGrey};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightBlue};

    border-radius: 2.5rem;
  }
`;

export const EmptyMessage = styled.div`
  padding: 0 0 7rem 0;
`;

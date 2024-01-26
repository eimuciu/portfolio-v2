import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const StyledLoader = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #2b303a;
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Loader() {
  return (
    <Wrapper>
      <StyledLoader></StyledLoader>
    </Wrapper>
  );
}

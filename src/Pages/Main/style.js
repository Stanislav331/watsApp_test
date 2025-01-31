import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #000;
  position: absolute;
  width: 80%;
  height: 90%;
`;

export const LeftBar = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  overflow-y: auto;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  padding: 15px 15px;
`;

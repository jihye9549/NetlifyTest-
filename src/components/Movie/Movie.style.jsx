import styled from 'styled-components';

export const TitleWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, auto));
  grid-template-rows: repeat(3, 1fr);
  width: 130px;
  height: 40px;
  background-color: rgb(73, 58, 121);
`;

export const PosterImg = styled.img`
  width: 130px;
  height: 200px;
  vertical-align: bottom;
`;

export const PosterTitle = styled.h1`
  grid-column: 1;
  grid-row: 2;
  margin: 0;
  font-size: 4px;
  color: #fff;
`;

export const Vote = styled.h3`
  grid-column: -1;
  grid-row: 2;
  margin: 0;
  font-size: 3px;
  color: #fff;
`;

export const OverviewTitle = styled.h3`
  margin: 8px 4px 5px 4px;
  font-size: 10px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
`;

export const OverviewContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
`;

export const PosterContainer = styled.div`
  position: relative;
  &:hover ${OverviewContainer} {
    visibility: visible;
  }
`;

export const Overview = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0 4px 0 4px;
  font-size: 2px;
  line-height: 13px;
`;

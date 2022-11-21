import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeList as List} from "react-window";
import {useAppSelector} from "../../types/hooks";
import styled from "styled-components";


const VirtualList = () => {
    const photosArr = useAppSelector(state => state.getPhotos.photos);

    const RenderedItem = ({index, style}: any) => (
        <PostTile key={index} style={style}>{index + ' ' + photosArr[index].title}</PostTile>
    );

    return (
        <VirtualListWrap>
            <AutoSizer>
                {({height, width}: any) => (
                    <StyledList
                        height={height}
                        itemCount={photosArr.length}
                        itemSize={50}
                        width={width}
                    >
                        {RenderedItem}
                    </StyledList>
                )}
            </AutoSizer>
        </VirtualListWrap>
    )
}
export default VirtualList


const VirtualListWrap = styled.div`
  background-color: ${({theme}) => theme.white};
  height: 90vh;
`;

const StyledList = styled(List)`
  background-color: blue;
  flex-direction: row;
  flex-wrap: wrap;


  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    //background: #f1f1f1;
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: aqua;
    height: 60px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const PostTile = styled.div`
  background-color: wheat;
  display: flex;
  align-items: center;
  width: 50px;

  &:hover {
    background-color: red;
  }
`;
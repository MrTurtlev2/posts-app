import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeList as List} from "react-window";
import {useAppSelector} from "../../types/hooks";
import styled from "styled-components";


const rowRenderer = ({key, index, style}: any) => {
    return (
        <PostTile key={key} style={style}>
            row
            {/*<p>{JSON.stringify(photosArr)}</p>*/}
            {/*<p>{JSON.stringify(photosArr)}</p>*/}
            {/*<PostTile {...photosArr[index]} />*/}
        </PostTile>
    );
}

const VirtualList = () => {
    const photosArr = useAppSelector(state => state.getPhotos.photos);

    return (
        <VirtualListWrap>
            <AutoSizer>
                {({height, width}: any) => (
                    <List
                        height={height}
                        itemCount={photosArr.length}
                        itemSize={50}
                        width={width}
                    >
                        {rowRenderer}
                    </List>
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

const PostTile = styled.div`
  background-color: wheat;

  &:hover {
    background-color: red;
  }
`;
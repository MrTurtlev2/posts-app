import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../types/hooks";
import {getPhotosAsync} from "../state/photos/GetPhotosSlice";
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styled from "styled-components";

const Dashboard = () => {

    const photosArr = useAppSelector(state => state.getPhotos.photos)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPhotosAsync());
    }, [dispatch])

    // console.log(photosArr)

    const rowRenderer = ({key, index, style}: any) => {
        return (
            <div key={key} style={style}>
                row
                {/*<p>{JSON.stringify(photosArr)}</p>*/}
                {/*<p>{JSON.stringify(photosArr)}</p>*/}
                {/*<PostTile {...photosArr[index]} />*/}
            </div>
        );
    }

    return (
        // <div>
        //     {photosArr.map((post: any, index) => {
        //         return <PostTile key={index} {...post} />
        //     })}
        // </div>
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
export default Dashboard

const VirtualListWrap = styled.div`
  background-color: ${({theme}) => theme.white};
  height: 90vh;
`;
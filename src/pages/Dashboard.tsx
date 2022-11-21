import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../types/hooks";
import {getPhotosAsync} from "../state/photos/GetPhotosSlice";
import VirtualList from "../components/dashboard/VirtualList";

const Dashboard = () => {

    const photosArr = useAppSelector(state => state.getPhotos.photos)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPhotosAsync());
    }, [dispatch])


    return (

        <VirtualList/>
    )
}
export default Dashboard

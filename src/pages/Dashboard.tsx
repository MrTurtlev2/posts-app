import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../types/hooks";
import {getPhotosAsync} from "../state/photos/GetPhotosSlice";

const Dashboard = () => {

    const photosArr = useAppSelector(state => state.getPhotos.photos)
const dispatch = useAppDispatch();
    useEffect(()=> {
        dispatch(getPhotosAsync());
    }, [dispatch])

    console.log(photosArr)

    return (
        <div>
            DAshboard
        </div>
    )
}
export default Dashboard
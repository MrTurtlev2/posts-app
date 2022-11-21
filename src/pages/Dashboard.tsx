import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../types/hooks";
import {getPhotosAsync} from "../state/photos/GetPhotosSlice";
import PostTile from "../components/common/PostTile";

const Dashboard = () => {

    const photosArr = useAppSelector(state => state.getPhotos.photos)
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getPhotosAsync());
    }, [dispatch])

    console.log(photosArr)

    return (
        <div>
            {photosArr.map((post: any, index) => {
                return <PostTile key={index} {...post} />
            })}
        </div>
    )
}
export default Dashboard
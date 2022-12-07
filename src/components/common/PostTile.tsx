import styled from "styled-components";

const PostTile = ({style, title, thumbnailUrl}: any) => {

    return (
        <TileBackground style={style}>
            <TileWrapper>
                {title}
                <PostImg src={thumbnailUrl} alt={''}/>
                <CommentsBar/>
            </TileWrapper>
        </TileBackground>
    )

}

export default PostTile

const TileBackground = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.white};
`;
const TileWrapper = styled.div`
  background-color: #18191A;
  border-radius: 8px;
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const PostImg = styled.img`
  width: 30%;
  height: 50%;
  border-radius: 50%;
`;

const CommentsBar = styled.div`


`;
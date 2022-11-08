import styled, {keyframes} from "styled-components";
import {useEffect, useRef, useState} from "react";
import Arrow from '../../assets/img/navigation/dropdownIcon.svg'
import {bounceInDown, bounceOutRight} from 'react-animations'

const UserDropdown = () => {

    const [isListOpen, setListOpen] = useState<Boolean>(false);
    const [barHeight, setBarHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // @ts-ignore-next-line
        setBarHeight(ref.current.clientHeight)
    }, []);

    return (
        <UserDropdownWrap ref={ref}>
            <DropDownContent className='flex-center' onClick={() => setListOpen(!isListOpen)}>
                <UserName>Marek Wojnar</UserName>
                <StyledArrow src={Arrow} alt='dropdown-icon' rotate={isListOpen}/>
            </DropDownContent>
            <DropDownListWrap listOpen={isListOpen} height={barHeight}>
                vdvvd
            </DropDownListWrap>
        </UserDropdownWrap>
    )
}
export default UserDropdown

const listOpeningAnim = keyframes`${bounceInDown}`;
const listClosingAnim = keyframes`${bounceOutRight}`;

const UserDropdownWrap = styled.div`
  height: 100%;
  width: 15vw;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const DropDownContent = styled.div`
  height: 100%;
  width: 100%;
  z-index: 5;

  &:hover {
    cursor: pointer;
    background-color: aqua;
  }
`;
const DropDownListWrap = styled.div<{ listOpen: Boolean, height: Number }>`
  height: 60px;
  width: 15vw;
  position: absolute;
  transition: all 0.5s ease;
  top: ${p => p.height + 'px'};
  right: 0;
  background-color: red;
  z-index: 1;
  animation: ${p => p.listOpen ? listOpeningAnim : listClosingAnim} 1s forwards;
`;

const UserName = styled.p`
  font-size: 16px;
  margin-right: 15px;
`;
const StyledArrow = styled.img<{ rotate: Boolean }>`
  width: 25px;
  height: 25px;

  transition: all .2s ease;
  transform: ${p => p.rotate ? 'rotate(0.5turn)' : 'rotate(0turn)'};
`;

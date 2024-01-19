import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillTool } from 'react-icons/ai';


const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0; 
    color: #fff;
    position: relative;
    width: 100%;
    
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`;


const FlagLine = styled.hr`
  height: 10px;
  background: linear-gradient(to right, #0047AB 33.3%, #000000 33.3%, #000000 66.6%, #FFFFFF 66.6%);
  border: none;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    h1 {
        font-size: 25px;
        font-weight: 550;
        margin: 0 20px;
        
        color: #000000;
    }
`;

const MenuLinks = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    align-items: center;
    

    a {
        font-size: 18px;
        font-weight: 400;
        margin-left: 10px;
        color: #000000;
        text-decoration: none;
        margin: 0 10px;
    }
`;

export const NavBar = () => {
  return (
    <>
    <div>
    <NavBarContainer >
        <Title>
        <img src="/Tallinn cafelist new logo.png" alt="logo" width="50px" height="auto" />
        <h1>Tallinn Cafélist</h1>
        </Title>
        <div>
        <MenuLinks>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'><AiFillTool size={20} /></Link>        
        </MenuLinks>
        </div>
    </NavBarContainer >
    <FlagLine />
    </div>
    
    </>
  )
}

export default NavBar;
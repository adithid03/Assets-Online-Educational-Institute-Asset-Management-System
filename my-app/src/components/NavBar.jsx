import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';




const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(Link)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none
`;
const Lo = styled(Link)`
    margin-left:1230px;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
`



const NavBar = ()=>{
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Home</Tabs>
                <Tabs to ='add'>AddAsset</Tabs>
                <Lo to ='/login'>Log Out</Lo>
            </Toolbar>
        </Header>
    )
}

export default NavBar;
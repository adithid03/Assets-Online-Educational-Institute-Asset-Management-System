import { useEffect, useState } from "react";

import { Table, TableRow, TableBody, TableCell, TableHead, styled, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'

import { getAssets , deleteAsset } from '../service/api';

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    
    margin: 50px auto 0 auto
`
const Thead = styled(TableRow)`
    background : black;
    & > th{
        color:white;
        font-size: 20px
    }
`
const TBody = styled(TableRow)`
    & > td{
        font-size:15px;
        
    }
`

const Home = ()=>{

    const [users,setUsers] = useState([]);

    useEffect (()=>{
        getAllAssets();
    },[]);

    const getAllAssets = async () =>{ 
        try{
            let res = await getAssets();
            setUsers(res.data);
        }
        catch(error)
        {
            console.log("Error to get assets");
        }

    }

    const deleteAssetDetails = async(id) => {
        await deleteAsset(id);
        getAllAssets();
    }
    
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    
                    <TableCell>AssetID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>AssetType</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>YearOfConstruction</TableCell>
                    <TableCell>Capacity</TableCell>
                    <TableCell>NumRooms</TableCell>
                    <TableCell>MaintenaceRequired</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TBody key ={user._id}>
                            <TableCell>{user.AssetID}</TableCell>
                            <TableCell>{user.Name}</TableCell>
                            <TableCell>{user.AssetType}</TableCell>
                            <TableCell>{user.Description}</TableCell>
                            <TableCell>{user.YearofConstruction}</TableCell>
                            <TableCell>{user.Capacity}</TableCell>
                            <TableCell>{user.NumRooms}</TableCell>
                            <TableCell>{user.MaintanceReq}</TableCell>
                            <TableCell>{user.Owner}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="success" style={{marginRight:10}} startIcon={<EditIcon/>} component={Link}  to={`/edit/${user._id}`}></Button>
                                <Button variant="contained" color="error" onClick={() => deleteAssetDetails(user._id)} startIcon={<DeleteIcon />}></Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default Home;
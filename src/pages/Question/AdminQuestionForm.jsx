import React from 'react'
import styled from 'styled-components';
import axios from 'axios'
import UserLineInfo from './UserLineInfo';
import PaginationBar from './PaginationBar';
import {
  SearchIcon,
  ProfileIcon,
  LockIcon,
  TrashIcon,
  CollapseIcon,

} from "../../assets/icons";
const Table = styled.table`
height: 700px;
`;
const TableNamesContainer = styled.div`
display: flex;
`;
const TableCell = styled.th`
padding-left: 20px;
:first-child{
  margin-left: 15px;
}
`;
const ReverceTableCell = styled.div`
transform: rotate(180deg);
margin-left: 10px;
`;
const TableContainer = styled.tr`
height: 30px;
`;

function AdminQuestion() {
const [userData, setUserData] = React.useState();
React.useEffect(() => {
  const apiUrl = 'http://localhost:3001/userData';
  axios.get(apiUrl).then((resp) => {
    const allPersons = resp.data;
    setUserData(allPersons);
  });
}, [setUserData]);

  return (
    <>
   <Table>
   <tbody>

   <TableContainer>
  <TableCell><ProfileIcon color='#EE7500' bg='#2f2f2f' size={30} height={30}/></TableCell>
  <TableCell><TableNamesContainer><p>Логин пользователя</p> 
  <SearchIcon  color='#EE7500' bg='#2f2f2f' size={34}/></TableNamesContainer></TableCell>
   <TableCell>Дата регистрации</TableCell>
   <TableCell>Статус</TableCell>
   <TableCell>Рейтинг</TableCell>
   <TableCell>Скидка</TableCell>
   <TableCell>Куплено товаров</TableCell>
   <TableCell>Последний заказ</TableCell>
   <TableCell><LockIcon color='#EE7500' bg='#2f2f2f' size={30} height={20} width={30}/></TableCell>
   <TableCell><TrashIcon color='#EE7500' bg='#2f2f2f' height={30} width={30}/></TableCell>
   <TableCell><ReverceTableCell><CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={true}/></ReverceTableCell></TableCell>
</TableContainer>
  <UserLineInfo  data={userData}></UserLineInfo>
    <tr><td></td></tr>
  </tbody>
</Table>
 <PaginationBar/>
    </>
  )
}

export default AdminQuestion
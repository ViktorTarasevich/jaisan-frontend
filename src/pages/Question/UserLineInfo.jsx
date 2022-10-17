import React from 'react'
import styled from 'styled-components';
import {
  LockIcon,
  TrashIcon,
  CollapseIcon,

} from "../../assets/icons";
const UserPhoto = styled.img`
width: 30px;
height: 30px;
`;
const TableCell = styled.tr`
height: 30px;
`;
const TableCellItem = styled.td`
text-align: center;
padding-left: 20px;
`;
const TableCellItemError = styled.td`
font-size: 16px;
line-height:16px
`;
const ReverceTableCell = styled.div`
transform: rotate(180deg);
margin-left: 10px;
`;
const DiscountRectangle =styled.div`
width: 65px;
height: 22px;
background: #1A1A1A;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
}
`;
function UserLineInfo({data}) {
  const [reverse, setReverse] = React.useState(false)

  return (
    <>
   {data 
  ? data.map((obj)=>
    <TableCell  onClick={(e) => console.log(TableCell.contains(e.target))} key={obj.id}>
    <TableCellItem><UserPhoto src={obj.imgUrl} alt='фото пользователя'/></TableCellItem>
    <TableCellItem><p>{obj.login}</p></TableCellItem>
    <TableCellItem>{obj.RegistrationDate}</TableCellItem>
    <TableCellItem>{obj.userStatus}</TableCellItem>
    <TableCellItem>{obj.rating}</TableCellItem>
    <TableCellItem><DiscountRectangle>{obj.discount}%</DiscountRectangle></TableCellItem>
    <TableCellItem>{obj.purchasedGoods}</TableCellItem>
    <TableCellItem>{obj.lastOrder}</TableCellItem>
    <TableCellItem><LockIcon color='#EE7500' bg='#2f2f2f' size={30} height={20} width={30}/></TableCellItem>
    <TableCellItem><TrashIcon color='#EE7500' bg='#2f2f2f' height={30} width={30}/></TableCellItem>
    <TableCellItem>{reverse 
   ?<CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={true}/> 
   :  <ReverceTableCell><CollapseIcon color='#EE7500' bg='#2f2f2f' size={20} reverse={false}/></ReverceTableCell>
   }
   </TableCellItem>
  </TableCell>
)
: <TableCell>
  <TableCellItemError>Данные не были полученны</TableCellItemError>
</TableCell>
   }
    </>
  )
}

export default UserLineInfo
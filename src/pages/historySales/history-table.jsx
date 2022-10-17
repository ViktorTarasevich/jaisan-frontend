import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GridHeader} from "../../components/Atomic/gridHeader";
import {CollapseOpen, CartIcon} from "../../assets/icons";
import {CollapseClose} from "../../assets/icons/collapse-close";
import Counter from "../../components/Atomic/counter";

function createData(id, calories, fat, carbs, protein, price) {
    return {
        id,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
        ],
        sold:
            {
                id: 1,
                name: 'Машина AHD110 110Ah 850A (R+) 350x175x230 mm',
                brand: 'AHD',
                article: 'AHD110',
                wholesale: '600',
                purchasePrice: '500',
                balance: '100',
                provider: 'Еврозапчасть',
                deadline: '3 дня',
                stock: 'Минск',
            },
    };
}

const mainRow =
    {
        color: 'white',
        '.MuiTableCell-body': {
            fontSize: '18px',
        },
        '.MuiTableCell-head': {
            fontSize: '18px',
        },
    }

const subRow =
    {
        margin: 1,
        color: 'white',
        '.MuiTableCell-body': {
            fontSize: '18px',
        },
        '.MuiTableCell-head': {
            fontSize: '18px',
        },
    }


function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={mainRow}>
                <TableCell style={{color: '#EE7500'}} component="th" scope="row" align='center'>
                    {row.id}
                </TableCell>
                <TableCell align="center">2021</TableCell>
                <TableCell align="center">{row.fat} шт</TableCell>
                <TableCell align="center">{row.carbs} руб.</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align='center'>
                    <IconButton
                        aria-label="expand row"
                        size="none"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <CollapseOpen bg='none' color='#EE7500' size={30}/> :
                            <CollapseClose bg='none' color='#EE7500' size={34}/>}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={7} sx={subRow}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table size="medium" aria-label="purchases">
                                <TableBody>
                                    <TableRow>
                                        <TableCell width='500px' style={{borderBottomColor: 'black'}}>{row.sold.name}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.brand}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.article}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.wholesale}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.purchasePrice}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.provider}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.deadline}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}>{row.sold.stock}</TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}><Counter/></TableCell>
                                        <TableCell style={{borderBottomColor: 'black'}}><CartIcon bg='inherit' color='#EE75000' size={36}/></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData(1, 159, 6.0, 24, 4.0, 3.99),
    createData(2, 237, 9.0, 37, 4.3, 4.99),
    createData(3, 262, 16.0, 24, 6.0, 3.79),
    createData(4, 305, 3.7, 67, 4.3, 2.5),
    createData(5, 356, 16.0, 49, 3.9, 1.5),
];

export const HistoryTable = () => {
    return (
        <div>
            <GridHeader title={'История заказов'} backButton={true} headerRadius={true}/>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow sx={mainRow}>
                            <TableCell style={{color: '#EE7500'}} align='center'>№</TableCell>
                            <TableCell align="center">Дата заказа</TableCell>
                            <TableCell align="center">Количество товаров</TableCell>
                            <TableCell align="center">Общая сумма</TableCell>
                            <TableCell align="center">Статус заказа</TableCell>
                            <TableCell align="center">Корзина</TableCell>
                            <TableCell align="center"><CollapseClose bg='none' color='#EE7500' size={34}/> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.id} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

'use client'

import * as React from 'react'
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'
import { TableProps } from './type'

const Table: React.FC<TableProps> = ({ children, col = [] }) => {
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {col.map((item, index) => (
                            <TableCell key={index}>
                                {item.toUpperCase()}
                            </TableCell>
                        ))}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </MuiTable>
        </TableContainer>
    )
}

export default Table

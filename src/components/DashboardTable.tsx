import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useState } from "react";

interface Conta {
    id: number;
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string | null;
}

interface DashboardTableProps {
    contas: Conta[];
}

export const DashboardTable: React.FC<DashboardTableProps> = ({ contas }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }

    const paginatedContas = contas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    return (
        <Paper>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Vencimento</TableCell>
                            <TableCell>Pago em</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedContas.map((conta) => (
                            <TableRow key={conta.id}>
                                <TableCell>{conta.id}</TableCell>
                                <TableCell>{conta.descricao}</TableCell>
                                <TableCell>{conta.valor}</TableCell>
                                <TableCell>{conta.vencimento}</TableCell>
                                <TableCell>{conta.pagoEm ? conta.pagoEm : 'Não Pago'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component='div'
                count={contas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
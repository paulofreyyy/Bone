import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import { useState } from "react";
import { FormattedNumber, IntlProvider } from "react-intl";
import { TableActionButtons } from "./buttons/TableActionButtons";

interface Despesa {
    id: number;
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string;
}

interface DashboardTableProps {
    despesas: Despesa[];
}

export const DashboardTable: React.FC<DashboardTableProps> = ({ despesas }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const paginatedContas = despesas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Vencimento</TableCell>
                            <TableCell>Pago em</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedContas.map((despesa) => (
                            <StyledTableRow key={despesa.id}>
                                <TableCell>{despesa.id}</TableCell>
                                <TableCell>{despesa.descricao}</TableCell>
                                <TableCell>
                                    <IntlProvider locale="pt-BR">
                                        <FormattedNumber value={Number(despesa.valor)} style="currency" currency="BRL" />
                                    </IntlProvider>
                                </TableCell>
                                <TableCell>{despesa.vencimento}</TableCell>
                                <TableCell>{despesa.pagoEm ? despesa.pagoEm : 'Não Pago'}</TableCell>
                                <TableCell>
                                    <TableActionButtons despesa={despesa} />
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component='div'
                count={despesas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
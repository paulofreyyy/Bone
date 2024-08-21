import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditExpenseModal } from "../modals/EditExpenseModal";
import { useState } from "react";

interface Despesa {
    id: number;
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string;
}

export const TableActionButtons = ({ despesa }: { despesa: Despesa }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState<Despesa | null>(null);

    const handleEditClick = () => {
        setSelectedExpense(despesa);
        setIsEditModalOpen(true);
    };

    return (
        <>
            <Tooltip title="Editar">
                <IconButton onClick={handleEditClick}>
                    <EditIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Deletar">
                <IconButton color="error">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            {selectedExpense && (
                <EditExpenseModal
                    open={isEditModalOpen}
                    handleClose={() => setIsEditModalOpen(false)}
                    selectedExpense={selectedExpense}
                />
            )}
        </>
    );
};

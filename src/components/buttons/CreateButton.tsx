import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useState } from "react";
import { SpeedDial } from '@mui/material';
import { NewExpenseModal } from '../modals/NewExpenseModal';

export const CreateButton = () => {
    const [incomeOpen, setIncomeOpen] = useState(false);
    const [expenseOpen, setExpenseOpen] = useState(false);

    const expenseModalOpen = () => setExpenseOpen(true);
    const incomeModalOpen = () => setIncomeOpen(true);

    const handleIncomeClose = () => setIncomeOpen(false);
    const handleExpenseClose = () => {
        setExpenseOpen(false)
        window.location.reload();
    };
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction
                    key={"Despesa"}
                    icon={<AccountBalanceWalletIcon />}
                    tooltipTitle={"Despesa"}
                    tooltipOpen
                    onClick={expenseModalOpen}
                />
                <SpeedDialAction
                    key={"Receita"}
                    icon={<SavingsIcon />}
                    tooltipTitle={"Receita"}
                    tooltipOpen
                    onClick={incomeModalOpen}
                />
            </SpeedDial>

            <NewExpenseModal open={expenseOpen} handleClose={handleExpenseClose} />
        </>

    )
}
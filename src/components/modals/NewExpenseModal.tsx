import { Box, Button, Checkbox, FormControlLabel, Modal, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

interface NewExpenseModalProps {
    open: boolean;
    handleClose: () => void;
}

export const NewExpenseModal: React.FC<NewExpenseModalProps> = ({ open, handleClose }) => {
    const [descricao, setDescricao] = useState("");
    const [isFixa, setIsFixa] = useState(false);
    const [valor, setValor] = useState("");
    const [vencimento, setVencimento] = useState("");
    const [pagoEm, setPagoEm] = useState("");

    const handleSubmit = async () => {
        const data = {
            descricao,
            isFixa,
            valor,
            vencimento,
            pagoEm,
        }

        try {
            await axios.post("http://localhost:3000/contas/", data);
            handleClose(); // Fechar modal após envio bem-sucedido
        } catch (error) {
            console.error("Erro ao criar conta:", error);
        }
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
            }}>
                <h2>Criar Nova Conta</h2>
                <TextField
                    fullWidth
                    label="Descrição"
                    variant="outlined"
                    margin="normal"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Valor"
                    variant="outlined"
                    margin="normal"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Vencimento"
                    type="datetime-local"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={vencimento}
                    onChange={(e) => setVencimento(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Pago Em"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={pagoEm}
                    onChange={(e) => setPagoEm(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox checked={isFixa} onChange={(e) => setIsFixa(e.target.checked)} />}
                    label="Fixa"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{ mt: 2 }}
                >
                    Criar Conta
                </Button>
            </Box>
        </Modal>
    )
}
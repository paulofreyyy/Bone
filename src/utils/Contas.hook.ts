import { useState, useEffect } from "react";
import axios from "axios";

interface Conta {
    id: number;
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string | null;
}

export const useFetchContas = () => {
    const [contas, setContas] = useState<Conta[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Conta[]>('http://localhost:3000/contas');
                setContas(response.data);
            } catch (error) {
                setError('Erro ao buscar os dados');
            }
        };

        fetchData();
    }, []);

    return { contas, error };
};

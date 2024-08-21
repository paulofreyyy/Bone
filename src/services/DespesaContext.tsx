import axios from "axios";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Despesa {
    id: number; // Alterado para 'string' para corresponder ao tipo usado no modal
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string;
}

interface DespesaContextData {
    despesas: Despesa[];
    addDespesa: (despesa: Despesa) => void;
    updateDespesa: (despesa: Despesa) => void;
}

const DespesaContext = createContext<DespesaContextData | undefined>(undefined);

export const useDespesaContext = () => {
    const context = useContext(DespesaContext);
    if (!context) {
        throw new Error("useDespesaContext must be used within a DespesaProvider");
    }
    return context;
};

interface DespesaProviderProps {
    children: ReactNode;
}

export const DespesaProvider: React.FC<DespesaProviderProps> = ({ children }) => {
    const [despesas, setDespesas] = useState<Despesa[]>([]);

    const addDespesa = (despesa: Despesa) => {
        setDespesas((prevDespesas) => [...prevDespesas, despesa]);
    };

    const updateDespesa = (updatedDespesa: Despesa) => {
        setDespesas((prevDespesas) =>
            prevDespesas.map((despesa) =>
                despesa.id === updatedDespesa.id ? updatedDespesa : despesa
            )
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Despesa[]>('http://localhost:3000/contas');
                setDespesas(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados');
            }
        };

        fetchData();
    }, []);

    return (
        <DespesaContext.Provider value={{ despesas, addDespesa, updateDespesa }}>
            {children}
        </DespesaContext.Provider>
    );
};

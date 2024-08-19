import React, { createContext, useContext, useState, ReactNode } from "react";

interface Despesa {
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string;
}

interface DespesaContextData {
    despesas: Despesa[];
    addDespesa: (despesa: Despesa) => void;
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

    return (
        <DespesaContext.Provider value={{ despesas, addDespesa }}>
            {children}
        </DespesaContext.Provider>
    );
};

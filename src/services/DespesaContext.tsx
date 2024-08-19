import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a estrutura de uma despesa
interface Despesa {
    descricao: string;
    isFixa: boolean;
    valor: string;
    vencimento: string;
    pagoEm: string;
}

// Define os dados e funções que o contexto vai fornecer
interface DespesaContextData {
    despesas: Despesa[];
    addDespesa: (despesa: Despesa) => void;
}

// Criação do contexto
const DespesaContext = createContext<DespesaContextData | undefined>(undefined);

// Hook para consumir o contexto
export const useDespesaContext = () => {
    const context = useContext(DespesaContext);
    if (!context) {
        throw new Error("useDespesaContext must be used within a DespesaProvider");
    }
    return context;
};

// Provedor que irá encapsular a aplicação e fornecer o contexto
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

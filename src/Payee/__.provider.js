import React, { useContext } from "react";
import Value from "./__.provider.value";

const PayeeContext = React.createContext();

export const usePayees = () => (useContext(PayeeContext));

export const PayeeContextProvider = ({ children }) =>
	<PayeeContext.Provider {...{ value: Value(), children }} />
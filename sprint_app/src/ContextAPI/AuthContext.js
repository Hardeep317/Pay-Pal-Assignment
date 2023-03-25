const { createContext, useState } = require("react");


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const toggleContext = (value) => {
        setIsAuth(value);
    }

    return <AuthContext.Provider value={{isAuth, toggleContext}}>{children}</AuthContext.Provider>
}


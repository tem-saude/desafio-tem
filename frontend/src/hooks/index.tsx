import React, {createContext, useContext, useCallback, useState} from 'react';



interface AuthContextData{
  addUser(name:string):void;
  signOut(): void;
  userName: string;
}

interface GlobalData{
  name: string;
}
const AuthContext = createContext({} as AuthContextData)


const AppProvider: React.FC = ({children}) =>{
  const [data, setData] = useState(() =>{
    const name = localStorage.getItem('@TemSaude:user')

    if(name){
      return { name };
    }

    return {} as GlobalData;
  })

  const addUser = useCallback((name:string) =>{
    localStorage.setItem('@TemSaude:user',name );
    setData({name})
  }, [])

  const signOut = useCallback(() =>{
    localStorage.removeItem('@TemSaude:user')
  },[])


  return(
    <>
      <AuthContext.Provider value={{addUser, signOut, userName: data.name}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

function useAuth():AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
      throw new Error('useAuth must be used within and AuthProvider')
    }
    return context;
}

export { useAuth,  AppProvider}

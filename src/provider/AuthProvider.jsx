import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // auth
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logOut = () => {
        return signOut(auth)
      }

      const handleGoogleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
      }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubscribe();
      }, [auth]);

    const authInfo = { userRegister, userLogin, user, logOut,  handleGoogleSingIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
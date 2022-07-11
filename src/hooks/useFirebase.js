import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize the firebase config app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleLogin = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        .finally(()=>{
            setIsLoading(false);
        });
    };

    const adminEmailPassLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // setError('');
        })
        .catch(error => {
            // setError(error.message);
            console.log(error.message);
        })
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign Out Successful");
        })
        .finally(()=>{
            setIsLoading(false);
        });
    }

    return {
        googleLogin,
        user,
        logOut,
        isLoading,
        adminEmailPassLogin
    }
}

export default useFirebase;


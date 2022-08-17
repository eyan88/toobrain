import { Button } from "@mui/material";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Header = ( { signedIn, setSignedIn } ) => {

    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setSignedIn(true);
            }).catch((error) => {
                console.log(error.code)
            });
    };

    const handleSignOut = () => {
        setSignedIn(false)
        signOut(auth).then(() => {
            console.log("Signed Out");
            setSignedIn(false);
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className='header-container'>
            <h1>TooBrain</h1>
            { signedIn ? <Button onClick={() => handleSignOut()}>Sign Out</Button> : <Button onClick={() => handleSignIn()}>Sign In</Button>}
        </div>
    )
}

export default Header;
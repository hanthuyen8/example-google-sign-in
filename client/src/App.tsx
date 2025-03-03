import './App.css'
import {GoogleOAuthProvider} from '@react-oauth/google';
import EnvConfig from "./services/EnvConfig.ts";
import LoginByGoogleSimple from "./components/LoginByGoogleSimple.tsx";

const App = () => {
    return (
        <GoogleOAuthProvider clientId={EnvConfig.GoogleOAuthClientId}>
            <>
                <LoginByGoogleSimple/>
                {/*<LoginByGoogleComplex/>*/}
            </>
        </GoogleOAuthProvider>

    );
}

export default App

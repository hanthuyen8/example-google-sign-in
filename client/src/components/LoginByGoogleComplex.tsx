import {useGoogleLogin} from '@react-oauth/google';

const LoginByGoogleComplex = () => {
    const login = useGoogleLogin({
        flow: 'auth-code',
        ux_mode: 'redirect',
        redirect_uri: 'http://localhost:8082/auth',
        onSuccess: c => console.log(c),
        onError: e => console.error(e),
    });

    return (
        <button onClick={() => login()}>Login</button>
    );
};

export default LoginByGoogleComplex;
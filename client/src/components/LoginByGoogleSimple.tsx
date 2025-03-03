import {GoogleLogin} from '@react-oauth/google';

const LoginByGoogleSimple = () => {
    return (
        <GoogleLogin
            onSuccess={c => {
                console.log(c);
            }}

            shape={'pill'}

            onError={() => {
                console.error('Login failed');
            }}

            ux_mode={'popup'}

        >

        </GoogleLogin>
    );
};

export default LoginByGoogleSimple;
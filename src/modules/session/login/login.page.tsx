import {Box, Button, Spacer} from '@chakra-ui/react';
import Input from '@components/Form/Input';
import Layout from '@components/Layout/Layout';
import React from 'react';
import {useNavigate} from 'react-router';
import {useSession} from "@hooks/session/useSession";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {barbecueSchema} from "@modules/barbecue/barbecue.schema";

const LoginPage: React.FC = () => {
    const {signIn} = useSession();
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,

    } = useForm({
    });

    const doSignIn = (formData: any) => {
        signIn(formData)
        navigate('barbecues', {replace: true});
    }



    return (
        <Layout direction="column" align="center" justify="flex-start" bg="yellow">
            <Box>
                <Input label="Login" variant="filled" placeholder="e-mail" register={register('email')}/>
                <Spacer/>
                <Input label="Senha" variant="filled" placeholder="senha" register={register('password')}/>
                <Spacer/>
                <Button
                    onClick={handleSubmit(doSignIn)}
                    variant="rounded"
                    bg="black"
                    w="100%"
                    h="50px"
                    mt="50px"
                    color="white"
                    borderRadius="18px"
                >
                    Entrar
                </Button>
            </Box>
        </Layout>
    );
};

export default LoginPage;

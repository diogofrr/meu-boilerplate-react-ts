import { Slider, RegisterForm } from './styles';

import { Container } from '../../components/structure/Container';
import { Title } from '../../components/structure/Title';
import { Strong } from '../../components/structure/Strong';
import { Link } from '../../components/structure/Link';
import { Field } from '../../components/form/Field';
import { Fieldset } from '../../components/form/Fieldset';
import { Submit } from '../../components/form/Submit';

import { useForm } from 'react-hook-form';

type FormInputs = {
  nomeCompleto: string;
  email: string;
  senha: string;
  confirmarSenha: string | undefined;
};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const onSubmit = (data: FormInputs) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Container width="100vw" height="100vh">
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <Title fontSize="3.6rem" fontFamily="'Lato', sans-serif;" color="gray">
          Crie sua conta
        </Title>
        <Fieldset width="100%" height="50%" mqHeight="60%" overflow="visible" flexDirection="column">
          <Field
            htmlFor="nomeCompleto"
            label="Nome Completo"
            fontSize="1.6rem"
            placeholder="Insira seu nome completo"
            type="text"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'Este campo não pode ser vazio',
              patter: {
                value: /[\D]{1,}/,
                message: 'Esse campo não aceita números',
              },
              maxLength: {
                value: 50,
                message: 'O máximo são 50 caracteres',
              },
            }}
            messages={['Possuir no máximo 50 caracteres']}
          />
          <Field
            htmlFor="email"
            label="Email"
            fontSize="1.6rem"
            placeholder="Insira seu email"
            type="email"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'Este campo não pode ser vazio',
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
                message: 'Insira um email válido',
              },
            }}
            messages={["Deve possuir palavras, '@' e '.' "]}
          />
          <Field
            htmlFor="senha"
            label="Senha"
            fontSize="1.6rem"
            placeholder="Insira sua senha"
            type="password"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'Este campo não pode ser vazio',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message: 'Senha inválida',
              },
            }}
            messages={[
              'No mínimo menos 8 caracteres',
              '1 letra maiúscula',
              '1 letra minúscula',
              '1 número',
              'Pode conter caracteres especiais',
            ]}
          />
          <Field
            htmlFor="confirmarSenha"
            label="Confirme sua Senha"
            fontSize="1.6rem"
            placeholder="Insira sua senha novamente"
            type="password"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'Este campo não pode ser vazio',
              validate: () => {
                if (!(watch('senha') === watch('confirmarSenha'))) {
                  return 'As senhas não conferem';
                }
              },
            }}
            messages={['Ser igual a senha preenchida anteriormente']}
          />
          <Submit type="submit" onSubmit={() => onSubmit}>
            Cadastrar
          </Submit>
        </Fieldset>
        <Link href="https://google.com">
          Já tem uma conta? <Strong>Clique aqui</Strong>
        </Link>
      </RegisterForm>
      <Slider />
    </Container>
  );
};

export default Login;

import { Input } from '../../lib/components/Input';
import { Form } from '../../lib/components/Form';
import './style.scss';

const Home = () => {

    // const mask = [/\d/, /\d/, /\d/, ".", /\d/, /\d/];

    // const mask2 = (digit) => {
    //     let array = []
    //     for (let char of digit) {
    //         if (char == '@') {
    //             array = ['$', ...digit, /\./]
    //         } else {
    //             array = [...digit, /\./]
    //         }
    //     }
    //     return array
    // }

    const onFormSubmit = (values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
    }

    const inputs = {
        input_login: '',
        input_senha: '',
    }

    return (
        <section className="home-page">
            <div className="background-container">
                <div className="main-container">
                    <div className="titles">
                        <h1>Login</h1>
                        <hr />
                        <h1>Cadastro</h1>
                    </div>
                    <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                        <label htmlFor="input_login">Usuário</label>
                        <Input 
                            mask={() => false}
                            id='input_login'
                            placeholder='Nome de usuário, e-mail ou CPF'
                        />
                        <label htmlFor="input_senha">Senha</label>
                        <Input 
                            mask={() => false}
                            id='input_senha'
                            placeholder='Senha'
                        />
                        <button type="submit">Entrar</button>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Home
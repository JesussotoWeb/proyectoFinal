import { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Title from '../../atoms/Title/Title';
import styles from './IniciarSesion.module.css';

const IniciarSesion = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        apellido: ""
    });

    const sendForm = async (e) => {
        e.preventDefault();
        console.log(dataForm)

        const query = await fetch("http://localhost:4500/api/auth/login/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm)
        })
        const res = await query.json();
        console.log(res)
        if(res.ok){
            const token = {
                nombre: res.nombre,
                apellido: res.apellido,
                logged: true,
                token: res.token
            }

            localStorage.setItem("token", JSON.stringify(token))
            setTimeout(() => {
                location.pathname = "/dashboard";
            }, 1000);
        }
    }
    const changeInputs = (e) => {
        const {name, value} = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }
    return (
        <div onSubmit={(e) => sendForm(e)} className={styles.IniciarSesion}>
            <Title text='Iniciar sesion' customClass={styles.CreateAccountSection__Title} />
            <form className={styles.IniciarSesion__Form}>
                <Input callback={(e) => changeInputs(e)} name='nombre' type='text' placeholder='Nombre' value={dataForm.nombre}/>
                <Input callback={(e) => changeInputs(e)} name='apellido' type='text' placeholder='Apellido' value={dataForm.apellido} />

                <Input type='submit' value='Entrar' />
            </form>
        </div>
    )
}

export default IniciarSesion;
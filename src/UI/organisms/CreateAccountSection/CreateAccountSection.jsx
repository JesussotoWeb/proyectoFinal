import { useContext, useEffect, useState } from 'react';
import Input from '../../atoms/Input/Input';
import Title from '../../atoms/Title/Title';
import { useNavigate } from 'react-router-dom';
import styles from './CreateAccountSection.module.css';
import {AuthContext} from '../../../context/auth/AuthProvider';

const CreateAccountSection = () => {
    const {setAuth} = useContext(AuthContext);
    
    const navigateTo = useNavigate();
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        password: ''
    })
    

    const sendForm = async (input) => {
        input.preventDefault();

            let response = await fetch('http://localhost:4500/api/auth', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
              
              let result = await response.json();

            console.log(result);


            if(result.ok){
                
                const token = {
                    Nombre: result.userName,
                    Apellido: result.userLastName,
                    logged: true
                } 
                const tokenToJson = JSON.stringify(token);
                localStorage.setItem("tokenRegister", tokenToJson)
                setAuth(token)

                setTimeout(() => {
                    navigateTo("/dashboard")
                }, 2000)
            }else{
                console.log("Algo salio mal!")
            }
    }

    const changeInput = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })

    }

  return (
    <div className={styles.CreateAccountSection}>
        <Title text='Crea tu cuenta' customClass={styles.CreateAccountSection__Title} />
        <form onSubmit={(e) => sendForm(e)} className={styles.CreateAccountSection__Form}>
            <Input name='nombre' callback={(e) => changeInput(e)} type='text' placeholder='Nombre' value={data.nombre} />

            <Input name='apellido' callback={(e) => changeInput(e)} type='text' placeholder='Apellido' value={data.apellido} />

            <Input name='password' value={data.password} callback={(e) => changeInput(e)}  type='password' placeholder='grese Clave' />
            


            <Input type='submit' value='Crear Cuenta' />
        </form>
    </div>
  )
}

export default CreateAccountSection;
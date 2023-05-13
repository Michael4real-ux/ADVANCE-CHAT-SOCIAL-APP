import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import { postRegisterUser } from '../../utils/api';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import { CreateUserParams } from '../../utils/types';
import styles from './index.module.scss';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<CreateUserParams>();

  // console.log(errors);

  const onSubmit = async (data: CreateUserParams) => {
    // console.log(data);
    try {
     const  newData = await postRegisterUser(data);
    //  console.log(newData?.data?.message);
     toast.success(newData?.data?.message)
     navigate('/login')
    } catch (err:any) {
      // console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message)
    }
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
          })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField
            type="text"
            id="firstName"
            {...register('firstName', { required: 'First Name is Required' })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Last Name is Required' })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register('password', { required: 'Password is Required' })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};

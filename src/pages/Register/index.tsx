import React, { ChangeEvent, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../store/todoSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Register = () => {
  const [user, setUser] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setError('please enter value');
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
    setUser(value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!user) {
      setError('please enter value');
      setDisabled(true);
    } else {
      dispatch(login(user));
      navigate('/');
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Input
          onChange={handleChange}
          value={user}
          name="user"
          id="user"
          labelText="Enter your name"
          placeholder="Susan"
          error={error}
          maxLength={20}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={disabled}
          text="Submit"
        />
      </div>
    </>
  );
};

export default Register;

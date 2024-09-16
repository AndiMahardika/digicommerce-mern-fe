import React, { useState } from "react";
import { ZodIssue } from "zod-validation-error";
import { loginSchemaValidation } from "../validation/auth.validation";
import { loginUser } from "../services/api.login";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from "jotai";
import { userAtom } from "../../../lib/auth";

export function useLogin() {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("")
  const [errors, setErrors] = React.useState<ZodIssue[]>([])
  const [loading, setLoading] = useState(false);

  const setUser = useSetAtom(userAtom)

  async function handleLogin(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const dataForm = new FormData(e.currentTarget)
    const email = dataForm.get('email') as string
    const password = dataForm.get('password') as string

    const errors = loginSchemaValidation({ email, password})

    if(errors) { 
      setLoading(false)
      return setErrors(errors)
    }

    setErrors([])

    // Hit API
    // TODO : Implement Hit API
    const data = await loginUser({ email, password });

    if (!data.token) {
      setLoading(false);
      return setError('Something went wrong');
    }

    setUser(data.record);
    localStorage.setItem('user', JSON.stringify(data.record));
    console.log(data.record)
    Cookies.set('token', data.token)
    // push to dashboard
    navigate('/dashboard')
  }

  return {handleLogin, error, errors, loading}
}
import React, { useState } from "react";
import { ZodIssue } from "zod-validation-error";
import { registerSchemaValidation } from "../validation/auth.validation";
import { registerUser } from "../services/api.register";

export function useRegister() {
  const [error, setError] = useState<string>('');
  const [errors, setErrors] = React.useState<ZodIssue[]>([])
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleRegister(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const dataForm = new FormData(e.currentTarget)
    const name = dataForm.get('name') as string
    const email = dataForm.get('email') as string
    const password = dataForm.get('password') as string

    const errors = registerSchemaValidation({name, email, password})

    if(errors) { 
      setLoading(false)
      return setErrors(errors)
    }

    setErrors([])

    // Hit API
    // TODO : Implement Hit API
    const data = await registerUser({ name, email, password });

    if (!data) {
      setLoading(false);
      return setError('Something went wrong');
    }

    setLoading(false);
    setIsRegistered(true);
  }

  return {handleRegister, error, errors, loading, isRegistered}
}
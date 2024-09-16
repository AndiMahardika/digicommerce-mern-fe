import zod from "zod"
import { fromError } from "zod-validation-error"

export const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().max(255).min(8, "Password must be at least 8 characters long"),
})

export const registerSchema = zod.object({
  name: zod.string().max(255).min(3, "Name must be at least 3 characters long"),
  email: zod.string().email(),
  password: zod.string().max(255).min(8, "Password must be at least 8 characters long"),
})

export type TLogin = zod.infer<typeof loginSchema>
export type TRegister = zod.infer<typeof registerSchema>


export function registerSchemaValidation({name, email, password} : TRegister) {
  try {
    registerSchema.parse({name, email, password})
  } catch (error) {
    const validationError = fromError(error)
    // console.log(validationError.details)
    return validationError.details
  }
}

export function loginSchemaValidation({email, password} : TLogin) {
  try {
    loginSchema.parse({email, password})
  } catch (error) {
    const validationError = fromError(error)
    // console.log(validationError.details)
    return validationError.details
  }
}
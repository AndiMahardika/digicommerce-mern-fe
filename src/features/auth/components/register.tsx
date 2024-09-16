import AuthLayout from './layout.auth'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

export default function Register() {
  const { handleRegister, errors, loading, isRegistered } = useRegister()

  return (
    <AuthLayout>
      <div className='w-[400px] space-y-4'>
          <section>
            <h3>Register</h3>
            <p>Here is your register dashboard...</p>
          </section>
          <form onSubmit={handleRegister} key={isRegistered ? 'registered' : 'unregistered'} className='space-y-3'>
            <Input name='name' placeholder='name' />
            <Input name='email' placeholder='email' />
            <Input name='password' placeholder='password' type='password'/>
            <Button isFull disabled={loading}>Register</Button>
            {errors.map((error) => {
              return (
                <div key={error.code} className='text-red-500 text-sm text-center'>{error.message}</div>
              ) 
            })}
            {isRegistered && (
              <div className="text-center text-xs text-emerald-500">Register Success, Please login...</div>
            )}
          </form>
          <div>
            Have an account ? <Link to="/login" className='text-primary-500'>Login</Link>
          </div>
        </div>
    </AuthLayout>
  )
}

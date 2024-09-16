import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import AuthLayout from './layout.auth';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

export default function Login() {
  const { errors, loading, handleLogin } = useLogin()

    return (
        <AuthLayout>
            <div className="w-[400px] space-y-4">
                <section>
                    <h3>Login</h3>
                    <p>Here is your login dashboard...</p>
                </section>
                <form onSubmit={handleLogin} className='space-y-3'>
                  <Input name='email' placeholder='email' />
                  <Input name='password' placeholder='password' type='password'/>
                  <Button isFull disabled={loading}>Login</Button>
                  {errors.map((error) => {
                    return (
                      <div key={error.code} className='text-red-500 text-sm text-center'>{error.message}</div>
                    )
                  })}
                </form>
                <div>
                  Don't have an account ? <Link to="/register" className='text-primary-500'>Register</Link>
                </div>
            </div>
        </AuthLayout>
    );
}

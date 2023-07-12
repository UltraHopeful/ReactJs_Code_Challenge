import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [validation, setValidation] = useState('')

  const checkValidation = () => {
    const validationError = []

    if (!email || !password || !password){
      validationError.push('All fields must be filled in')
    }
    if ((email.match(/@/g)||[]).length !== 1){
      validationError.push('Email must have exactly one @ sign')
    }
    if (password.length < 8) {
      validationError.push('Password must be 8 characters or longer')
    }
    if (password !== passwordConfirm){
      validationError.push('Password and confirm password must be same')
    }
    return validationError;
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errors = checkValidation()
    setValidation(errors.length ? errors.join(', ') : 'User created!');
  } 
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {validation}
      <input type='submit' value='Submit' />
    </form>
  )
}

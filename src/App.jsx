import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
// import { TextField, Button } from 'material-ui/core'
import './App.css'

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Enter a correct email')
    .required('Email is required')
})

function App () {
  
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    },
    validationSchema: validationSchema
  })

  return (
    <div className='App'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id='firstName'
          name='firstName'
          label='First Name'
          margin='normal'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id='lastName'
          name='lastName'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id='email'
          name='email'
          label='Email Address'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button type='submit' variant='outlined'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default App

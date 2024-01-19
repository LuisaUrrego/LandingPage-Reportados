import React, { useState } from 'react';
import Wrapper from '../wrapper/Wrapper';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillHouseFill } from 'react-icons/bs';
import { WiTime3 } from 'react-icons/wi';
import './Formulario.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formulario = ({ reference }) => {

    
    //Validaciones del formulario 
    const validationSchema = Yup.object().shape({
        correo: Yup.string().email('Ingresa un correo electrónico válido').required('Campo requerido'),
        ciudad: Yup.string().required('Campo requerido'),
        residencia: Yup.string().required('Campo requerido'),
        tiempoReportado: Yup.string().required('Campo requerido'),
      });

  
    const { handleSubmit, handleChange, values, errors, touched, isSubmitting, resetForm } = useFormik({
      initialValues:{
          correo: '',
          ciudad: '',
          residencia: '',
          tiempoReportado: '',
      },
      validationSchema: validationSchema,
      onSubmit:async(values, { setSubmitting }) => {       
        try {
            const response = await axios.post('https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/Reportados_Payjoy', values);
            console.log('Respuesta de la API:', response.data);
            setSubmitting(false);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Hemos recibido tu datos en breve nos contactaremos contigo. Si tienes alguna duda escribenos a nuestro whatsApp",
              showConfirmButton: false,
              timer: 3000
            });
            resetForm();
          } catch (error) {
            console.error('Error en la petición:', error);
            setSubmitting(false);
          }
          console.log(values)
      }
    })



  return (
    <div className='form'  ref={reference} id="seccion3">
      <Wrapper>
        <form className='form__formulario' onSubmit={handleSubmit}>
          <div className='input-group'>
            <HiOutlineMail className='icon' />
            <input
              type='email'
              name='correo'
              className={`input ${touched.correo && errors.correo ? 'input-error' : ''}`}
              placeholder='Correo Electrónico'
              onChange={handleChange}
              value={values.correo}
              disabled={isSubmitting}
            />
            {touched.correo && errors.correo && <div className='error-message'>{errors.correo}</div>}
          </div>
          <div className='input-group'>
            <BsFillHouseFill className='icon' />
            <input
              type='text'
              name='ciudad'
              className={`input ${touched.ciudad && errors.ciudad ? 'input-error' : ''}`}
              placeholder='Ciudad'
              onChange={handleChange}
              value={values.ciudad}
              disabled={isSubmitting}
            />
            {touched.ciudad && errors.ciudad && <div className='error-message'>{errors.ciudad}</div>}
          </div>
          <div className='input-group'>
            <BsFillHouseFill className='icon' />
            <input
              type='text'
              name='residencia'
              className={`input ${touched.residencia && errors.residencia ? 'input-error' : ''}`}
              placeholder='Direccion de residencia'
              onChange={handleChange}
              value={values.residencia}
              disabled={isSubmitting}
            />
            {touched.residencia && errors.residencia && <div className='error-message'>{errors.residencia}</div>}
          </div>
          <div className='input-group'>
            <WiTime3 className='icon' />
            <input
              type='text'
              name='tiempoReportado'
              className={`input ${touched.tiempoReportado && errors.tiempoReportado ? 'input-error' : ''}`}
              placeholder='¿Hace cuánto se encuentra reportado?'
              onChange={handleChange}
              value={values.tiempoReportado}
              disabled={isSubmitting}
            />
            {touched.tiempoReportado && errors.tiempoReportado && <div className='error-message'>{errors.tiempoReportado}</div>}
          </div>
          <button type='submit' className='button__enviar' >
            Enviar
          </button>
        </form>
      </Wrapper>
    </div>
  );
};

export default Formulario;




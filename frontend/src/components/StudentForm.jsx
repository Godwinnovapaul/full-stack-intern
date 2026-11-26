
import React from 'react';
import { useFormContext } from 'react-hook-form';
const StudentForm = ({addOn}) => {
  const { register, handleSubmit, formState: { errors } } = useFormContext({resolver:zodresolver(StudentForm)});

  return <div><form>
    
    </form></div>;
};
export default StudentForm;

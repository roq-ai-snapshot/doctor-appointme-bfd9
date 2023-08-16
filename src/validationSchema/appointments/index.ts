import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  user_id: yup.string().nullable(),
  medical_staff_id: yup.string().nullable(),
});

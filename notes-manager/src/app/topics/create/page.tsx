'use client';

import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createTopic } from '@/app/services/api';

const CreateTopicPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      parentTopic: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Topic name is required'), 
      parentTopic: Yup.string().optional(),
    }),
    onSubmit: async (values) => {
      const { name, parentTopic } = values;
      const newTopic = { name, parentTopic };
      await createTopic(newTopic); 
      router.push('/topics'); 
    },
  });

  return (
    <div>
      <h2>Create Topic</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Topic name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Topic name"
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="parentTopic">Parent topic (optional)</label>
          <input
            type="text"
            id="parentTopic"
            name="parentTopic"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.parentTopic}
            placeholder="Parent topic (optional)"
          />
          {formik.touched.parentTopic && formik.errors.parentTopic && (
            <div style={{ color: 'red' }}>{formik.errors.parentTopic}</div>
          )}
        </div>

        <button type="submit">Create Topic</button>
      </form>
    </div>
  );
};

export default CreateTopicPage;

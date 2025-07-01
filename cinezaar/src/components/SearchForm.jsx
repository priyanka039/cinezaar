import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormBar = styled(Form)`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const Input = styled(Field)`
  background: #132238;
  color: var(--color-neutral);
  border: 1.5px solid #233554;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  width: 300px;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
    outline: none;
  }
  &:hover {
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.12);
  }
`;

const Button = styled.button`
  background: var(--color-accent);
  color: var(--color-primary);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-family: var(--font-title);
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  &:hover {
    background: var(--color-success);
    color: var(--color-primary);
    box-shadow: 0 2px 8px rgba(46, 204, 113, 0.18);
  }
  &:focus {
    outline: 2px solid var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent);
  }
`;

const ErrorText = styled.div`
  color: var(--color-error);
  font-size: 0.95rem;
  margin-top: 0.2rem;
`;

const validationSchema = Yup.object({
  search: Yup.string()
    .min(2, 'Enter at least 2 characters')
    .required('Movie title is required'),
});

const SearchForm = ({ onSearch, initialSearch = '' }) => (
  <Formik
    initialValues={{ search: initialSearch }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      onSearch(values.search);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <FormBar>
        <Input
          type="text"
          name="search"
          placeholder="Search movies..."
          autoComplete="off"
        />
        <Button type="submit" disabled={isSubmitting}>
          Search
        </Button>
        <ErrorMessage name="search" component={ErrorText} />
      </FormBar>
    )}
  </Formik>
);

export default SearchForm; 
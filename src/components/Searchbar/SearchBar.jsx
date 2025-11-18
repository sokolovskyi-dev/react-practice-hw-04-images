import { Formik, Form, Field } from 'formik';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { toast } from 'react-toastify';
import styled from 'styled-components';

// import * as yup from 'yup';
import { Header, SearchButton } from './SearchBar.styled';

export const Input = styled(Field)`
  border: none;
  background-color: #f9f9f9;
  height: 40px;
  outline: none;
  width: 200px;
  /* outline: 1px solid red; */
`;
export const SearchForm = styled(Form)`
  display: flex;
  align-items: start;
`;

// let schema = yup.object().shape({ search: yup.string().required() });

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (!values.search) {
      return toast.error('search is required field');
    }

    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Header>
      <Formik
        initialValues={{
          search: '',
        }}
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <SearchButton type="submit">
            <CiSearch />
          </SearchButton>
          <Input type="text" name="search" placeholder="Search images and photos..." autoFocus />
        </SearchForm>
      </Formik>
    </Header>
  );
};

export default SearchBar;

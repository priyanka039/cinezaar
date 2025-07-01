import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: var(--color-neutral);
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Select = styled.select`
  background: #132238;
  color: var(--color-neutral);
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-family: var(--font-body);
`;

const Input = styled.input`
  background: #132238;
  color: var(--color-neutral);
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-family: var(--font-body);
  width: 90px;
`;

const FilterBar = ({ year, type, onYearChange, onTypeChange }) => (
  <Bar>
    <Label htmlFor="year">Year:</Label>
    <Input
      id="year"
      type="number"
      min="1900"
      max={new Date().getFullYear()}
      value={year || ''}
      onChange={onYearChange}
      placeholder="e.g. 2020"
    />
    <Label htmlFor="type">Type:</Label>
    <Select id="type" value={type || ''} onChange={onTypeChange}>
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </Select>
  </Bar>
);

export default FilterBar; 
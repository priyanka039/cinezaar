import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid #233554;
  border-top: 4px solid var(--color-accent);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto 2rem auto;
  animation: ${spin} 1s linear infinite;
`;

const SkeletonCard = styled.div`
  background: #233554;
  border-radius: 12px;
  width: 150px;
  height: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 12px rgba(13, 27, 42, 0.12);
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, #233554 0%, #FFD700 50%, #233554 100%);
    opacity: 0.12;
    animation: ${shimmer} 1.2s infinite linear;
    background-size: 600px 100%;
  }
`;

const SkeletonLoader = ({ count = 8 }) => (
  <div>
    <Spinner />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
);

export default SkeletonLoader; 
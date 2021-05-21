import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return <div>this is empty page {title}</div>;
};

export default EmptyPage;

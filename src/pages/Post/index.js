import React, { useMemo } from 'react';

import { useLocation, useParams } from 'react-router-dom';

export default function Post() {
  const { search } = useLocation();
  const params = useParams();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <>
      <h1>Post page</h1>
      <h2>ID: {params.id}</h2>
      <h2>Query Params - filterBy: {queryParams.get('filterBy')}</h2>
    </>
  )
}
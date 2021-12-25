import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';
import { Request } from '@api';

export const App = () => {
  const query = useQuery('posts', () => Request('posts'));
  console.log(query.data);

  return <Link to="/private">Go To Private Page</Link>;
};

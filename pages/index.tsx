import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchFirstX } from '../core/api';

const Index: React.SFC<any> = (props: any) => {
  const { data } = props;
  console.log(props);
  return (
    <React.Fragment>
      <p>{JSON.stringify(data, null, 2)}</p>
    </React.Fragment>
  );
};

export default propLoader(Index, fetchFirstX(3));

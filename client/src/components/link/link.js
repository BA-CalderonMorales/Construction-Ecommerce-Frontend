/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import { useHistory } from 'react-router-dom';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label} 
    </A>
  );
}

export function Link({ path, label, children, ...rest }) {
  const history = useHistory();
  // For some reason, the Image logo isn't working. Will 
  // research about it.
  // const [search, setSearch] = useState(false);

  // useEffect(() => {
  //   if (!search)
  //   {
  //     history.push('')
  //   }
  // }, [search])
  // onClick={() => setSearch(true)}
  

  return (
    <A {...rest} href={path} >
      {children || label}
    </A>
  );
}

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Heading } from 'theme-ui';
import { Link } from '../link/link';

export default function Logo({ src, href, ...rest }) {
  return (
    <Link
      path={href}
      sx={{ 
        variant: 'links.logo',
        textDecoration: 'none',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}  
      {...rest}
    >
      {/* <Image src={src} alt="Mario's Construction"/> */}
      <Heading as="h3">Mares Construction</Heading>
    </Link>
  );
}

import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

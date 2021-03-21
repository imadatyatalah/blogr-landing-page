import Global from "../layouts/global";

// Overpass font
import "@fontsource/overpass/latin-300.css";
import "@fontsource/overpass/latin-600.css";

// Ubuntu font
import "@fontsource/ubuntu/latin-300.css";
import "@fontsource/ubuntu/latin-500.css";
import "@fontsource/ubuntu/latin-700.css";

import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Global>
      <Component {...pageProps} />
    </Global>
  </>
);

export default MyApp;

import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { Inspector, type InspectParams } from 'react-dev-inspector'

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <>
      <Component {...pageProps} />;
      <Inspector
        // props see docs:
        // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
        keys={[]}
        disableLaunchEditor={false}

        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return
          const { absolutePath } = codeInfo
          if (window) {
            window.top?.postMessage("openFile", absolutePath);
          }
        }}
      />
    </>)
};

export default api.withTRPC(MyApp);

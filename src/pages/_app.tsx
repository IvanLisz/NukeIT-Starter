import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { Inspector, type InspectParams } from 'react-dev-inspector'

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  if (typeof window !== 'undefined') {
    window.onmessage = function (e) {
      if (e.data == 'toggleInspector') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        (window as Record<string, any>).__REACT_DEV_INSPECTOR_TOGGLE__();
      }
    };
  }

  return (
    <>
      <Component {...pageProps} />;
      <Inspector
        keys={[]}
        disableLaunchEditor={true}
        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return
          const { absolutePath } = codeInfo
          if (window) {
            window.top?.postMessage({ type: "openFile", value: absolutePath }, "*");
          }
        }}
      />
    </>)
};

export default api.withTRPC(MyApp);

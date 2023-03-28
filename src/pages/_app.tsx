import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { Inspector, type InspectParams } from 'nukeit-react-inspector';

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <>
      <Component {...pageProps} />;
      <Inspector
        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return;
          const { absolutePath } = codeInfo
          console.log(codeInfo);
          if (window) {
            window.top?.postMessage({ type: "openFile", value: absolutePath }, "*");
          }
        }}
      />
    </>)
};

export default api.withTRPC(MyApp);

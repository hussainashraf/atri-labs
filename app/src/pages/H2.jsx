import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex20Cb, useDiv15Cb, useFlex21Cb, useDiv16Cb, useDiv17Cb, useDiv18Cb, useDiv19Cb, useTextBox26Cb, useImage14Cb, useImage15Cb, useImage18Cb, useImage19Cb } from "../page-cbs/h2";
import "../page-css/h2.css";
import "../custom/h2";

export default function H2() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex20Props = useStore((state)=>state["h2"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["h2"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div15Props = useStore((state)=>state["h2"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["h2"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex21Props = useStore((state)=>state["h2"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["h2"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Div16Props = useStore((state)=>state["h2"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["h2"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["h2"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["h2"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Div18Props = useStore((state)=>state["h2"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["h2"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["h2"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["h2"]["Div19"]);
const Div19Cb = useDiv19Cb()
const TextBox26Props = useStore((state)=>state["h2"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["h2"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image14Props = useStore((state)=>state["h2"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["h2"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image15Props = useStore((state)=>state["h2"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["h2"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image18Props = useStore((state)=>state["h2"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["h2"]["Image18"]);
const Image18Cb = useImage18Cb()
const Image19Props = useStore((state)=>state["h2"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["h2"]["Image19"]);
const Image19Cb = useImage19Cb()

  return (<>
  <Flex1 className="p-h2 Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Div1 className="p-h2 Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox1 className="p-h2 TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-h2 Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Div1 className="p-h2 Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image1 className="p-h2 Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Div1>
<Div1 className="p-h2 Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image1 className="p-h2 Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div1>
<Div1 className="p-h2 Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Image1 className="p-h2 Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Div1>
<Div1 className="p-h2 Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Image1 className="p-h2 Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Div1>
</Flex1>
  </>);
}

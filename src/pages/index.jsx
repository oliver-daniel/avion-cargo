import { useRouter } from "next/router";
import { withTranslation } from "react-i18next";

const Index = ({tReady, i18n}) => {
  if (tReady && typeof window !== "undefined") {
    const router = useRouter();
    
    if (i18n.language?.startsWith("en")) {
      router.replace("/en");
    } else {
      router.replace("/fr");
    }
  }
  return null;
};

export default withTranslation()(Index);

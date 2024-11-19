import { ContextHolderComponent } from "@/components/Context";
import { ContextWrapper } from "@/context/userContext";
const ContextPage = () => {
  return (
    <>
      <ContextWrapper>
        <ContextHolderComponent />;
      </ContextWrapper>
    </>
  );
};

export default ContextPage;

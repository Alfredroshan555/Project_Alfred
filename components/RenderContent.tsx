type TRenderProps = {
  children: React.ReactNode;
  isVisible: boolean;
};
export const RenderContent = ({ children, isVisible }: TRenderProps) => {
  return isVisible ? children : null;
};

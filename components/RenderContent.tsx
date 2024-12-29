type TRenderProps = {
  children: React.ReactNode;
  isVisible: boolean | any;
};
export const RenderContent = ({ children, isVisible }: TRenderProps) => {
  return isVisible ? children : null;
};

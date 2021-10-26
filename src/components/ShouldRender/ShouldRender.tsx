import { FC, ReactElement } from "react";

interface Props {
  if: boolean;
  children: ReactElement<any, any>;
}
const ShouldRender: FC<Props> = (props) => (props.if ? props.children : null);
export default ShouldRender;

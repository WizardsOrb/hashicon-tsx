import React from "react";
import { Params, HasherType } from "@emeraldpay/hashicon";
export interface Props {
    value: string;
    size?: number;
    hasher?: HasherType;
    options?: Params;
    style?: React.CSSProperties;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}
declare const Hashicon: React.FC<Props>;
export default Hashicon;

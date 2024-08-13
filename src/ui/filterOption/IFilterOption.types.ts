import { ReactNode } from "react";

export interface IFilterOption{
    label:string;
    defaultIcon?:ReactNode;
    hoveredIcon?:ReactNode;
    hasHoverState:boolean;
    labelCss?:string;
}
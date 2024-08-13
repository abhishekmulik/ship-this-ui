import { ReactNode } from "react";

export interface ISummaryLayout{
    title:string,
    tag?:string | number,
    children:ReactNode
}
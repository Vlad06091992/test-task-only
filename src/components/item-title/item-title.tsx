import s from "./item-title.module.scss";
import React from "react";

export const ItemTitle = ({title}:{title:string}) => (<h2 className={s.itemTitle}>{title}</h2>)

import s from "./title.module.scss";
import React from "react";

export const Title = ({title}:{title:string}) => ( <h1 className={s.title}>{title}</h1>)

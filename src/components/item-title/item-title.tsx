import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import s from "./item-title.module.scss";

export const ItemTitle = ({ title }: { title: string }) => {

const[opacity,setOpacity] = useState(1)

  useEffect(()=>{
    setOpacity(0)
  },[])

  return (
    <motion.h2
      key={title}
      className={s.itemTitle}
      initial={{opacity}}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {title}
    </motion.h2>
  );
};
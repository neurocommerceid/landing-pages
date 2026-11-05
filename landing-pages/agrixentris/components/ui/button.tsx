"use client";

import { Button as Primitive } from "@base-ui/react/button";

export function Button({ className = "", ...props }: Primitive.Props) {
  return <Primitive className={`button ${className}`} role={props.nativeButton === false ? "link" : undefined} {...props} />;
}

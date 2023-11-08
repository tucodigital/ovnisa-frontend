import React, { Fragment } from "react";

export default function Switcher({ componentsList }: any) {
  const RenderComponent = (component: any) => {
    switch (component.__component) {
      default:
        return <div></div>;
    }
  };

  return (
    <Fragment>
      {componentsList.map((component: any) => {
        return RenderComponent(component);
      })}
    </Fragment>
  );
}

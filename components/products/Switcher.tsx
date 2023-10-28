import React, { Fragment } from "react";
import { MainMenu } from "./MainMenu/MainMenu";
import { Footer } from "./Footer/Footer";

export default function Switcher({ componentsList }: any) {
  const RenderComponent = (component: any) => {
    switch (component.__component) {
      case "menus.main-menu":
        return <MainMenu key={component?.id + component?.name} />;

      case "footer.footer":
        return <Footer key={component?.id + component?.name} />;

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

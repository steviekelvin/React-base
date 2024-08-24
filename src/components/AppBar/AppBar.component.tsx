/* eslint-disable @typescript-eslint/no-explicit-any */

import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { itemsAppBar } from "./itens.appBar.component";
import reactIcon from "./../../assets/react-logo.svg";

const AppBarComponent = () => {
  const start = (
    <img alt="logo" src={reactIcon} height="40" className="mr-2"></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Pesquisar"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={itemsAppBar} start={start} end={end} />
    </div>
  );
};

export default AppBarComponent;

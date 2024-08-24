/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Badge } from "primereact/badge";
import { MenuItem } from "primereact/menuitem";

const itemRenderer = (item) => (
  <a className="flex align-items-center p-menuitem-link">
    <span className={item.icon} />
    <span className="mx-2">{item.label}</span>
    {item.badge && <Badge className="ml-auto" value={item.badge} />}
    {item.shortcut && (
      <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
        {item.shortcut}
      </span>
    )}
  </a>
);

export const itemsAppBar: MenuItem[] | any = [
  {
    label: "Início",
    icon: "pi pi-home",
  },
  {
    label: "Novidades",
    icon: "pi pi-star",
  },
  {
    label: "Produtos",
    icon: "pi pi-search",
    items: [
      {
        label: "Pesquisar",
        icon: "pi pi-chart-bar",
        shortcut: "⌘+S",
        template: itemRenderer,
      },
      {
        separator: true,
      },
      {
        label: "Cadastro",
        icon: "pi pi-user-plus",
        items: [
          {
            label: "Produto",
            icon: "pi pi-shopping-cart",
            badge: 3,
            template: itemRenderer,
          },
          {
            label: "Categoria",
            icon: "pi pi-tags",
            template: itemRenderer,
          },
          {
            label: "Marca",
            icon: "pi pi-tag",
            template: itemRenderer,
          },
        ],
      },
    ],
  },
  {
    label: "Contato",
    icon: "pi pi-envelope",
    badge: 3,
    template: itemRenderer,
  },
];

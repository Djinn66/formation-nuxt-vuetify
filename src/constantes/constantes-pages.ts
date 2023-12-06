import { camera, enrolement, exportData, site } from "assets";

export const ConstantesPages = [
  {
    id: "1",
    libelle: "Gestion Enrôlement",
    image: enrolement,
    path: "/enrolement",
  },
  {
    id: "2",
    libelle: "Gestion Sites",
    image: site,
    path: "/sites",
  },
  {
    id: "3",
    libelle: "Gestion Caméra",
    image: camera,
    path: "/camera",
  },
  {
    id: "4",
    libelle: "Export",
    image: exportData,
    path: "/export",
  },
];

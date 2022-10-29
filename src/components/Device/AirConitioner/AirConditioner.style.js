import { accent2, dark2 } from "../../../styles/ColorScheme";

export const style = {
  // "ac-container": {
  //   background: dark2,
  //   borderRadius: "20px",
  //   padding: "20px",
  //   width: "100%",
  // },
  // "ac-container-header": {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // "ac-container-header-name": {
  //   textTransform: "uppercase",
  //   color: accent2,
  // },
  "ac-container-header-control": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  "ac-container-body": {
    display: "grid",
    gridTemplateColumn: "7fr 3fr",
    height: "100%",
  },

  //   ac control
  "acc-container": {
    marginTop: "20px",
    height: "100%",
    minHeight: "200px",
    display: "grid",
    gridTemplateColumns: "7fr 3fr",
    gridTemplateRows: "1fr",
  },
  "acc-input": {
    height: "100%",
    width: "100%",
    padding: "0px 10px",
  },
};

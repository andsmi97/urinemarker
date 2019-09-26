export const names = {
  LEU: {
    shortName: "LEU",
    fullName: "Лейкоциты",
    metric: "клеток/микролитр"
  },
  KET: {
    shortName: "KET",
    fullName: "Кетоны",
    metric: "милимоль/литр"
  },
  NIT: { shortName: "NIT", fullName: "Нитраты", metric: "" },
  URO: { shortName: "URO", fullName: "Уробилиноген", metric: "микромоль/литр" },
  BIL: { shortName: "BIL", fullName: "Билирубин", metric: "микромоль/литр" },
  PRO: { shortName: "PRO", fullName: "Белки", metric: "грамм/литр" },
  GLU: { shortName: "GLU", fullName: "Глюкоза", metric: "милимоль/литр" },
  SG: { shortName: "SG", fullName: "Удельный вес", metric: "грамм/милилитр" },
  BLD: { shortName: "BLD", fullName: "Кровь", metric: "клеток/микролитр" },
  pH: { shortName: "pH", fullName: "Водородный показатель", metric: "" }
};

// const resExample = {
//   date: "timestamp",
//   substances: {
//     leu: "number",
//     ket: "number",
//     nit: "boolean",
//     uro: "number",
//     bil: "number",
//     pro: "number",
//     glu: "number",
//     sg: "number",
//     bld: "number",
//     ph: "number"
//   }
// };

export const createSubstancesArray = res => {
  return Object.entries(res)
    .filter(substance => {
      return names[substance[0]] !== undefined;
    })
    .map(substance => {
      return {
        ...names[substance[0]],
        value: substance[1]
      };
    });
};

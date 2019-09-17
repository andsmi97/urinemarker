export const names = {
  lei: {
    shortName: "LEI",
    fullName: "Лейкоциты",
    metric: "клеток/микролитр"
  },
  ket: {
    shortName: "KET",
    fullName: "Китоны",
    metric: "милимоль/литр"
  },
  nit: { shortName: "NIT", fullName: "Нитраты", metric: "" },
  uro: { shortName: "URO", fullName: "Уробилиноген", metric: "микромоль/литр" },
  bil: { shortName: "BIL", fullName: "Билирубин", metric: "микромоль/литр" },
  pro: { shortName: "PRO", fullName: "Белки", metric: "грамм/литр" },
  glu: { shortName: "GLU", fullName: "Глюкоза", metric: "милимоль/литр" },
  sg: { shortName: "SG", fullName: "Удельный вес", metric: "грамм/милилитр" },
  bld: { shortName: "BLD", fullName: "Кровь", metric: "клеток/микролитр" },
  ph: { shortName: "pH", fullName: "pH", metric: "" }
};

const resExample = {
  date: "timestamp",
  substances: {
    lei: "number",
    ket: "number",
    nit: "boolean",
    uro: "number",
    bil: "number",
    pro: "number",
    glu: "number",
    sg: "number",
    bld: "number",
    ph: "number"
  }
};

export const createSubstancesArray = res => {
  return Object.entries(res.substances).map(substance => {
    return { ...names[substance[0]], value: substance[1] };
  });
};

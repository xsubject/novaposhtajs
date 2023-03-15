import { initNovaPoshta } from "./NovaPoshta";

export * from "./NovaPoshta";
export * from "./Schema";

initNovaPoshta().address.getAreas({}).then(console.log)
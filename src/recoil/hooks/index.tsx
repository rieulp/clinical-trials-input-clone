import { useRecoilValueLoadable } from "recoil";
import { getSickList } from "../selector/sickSelector";

export const useSickList = (keyword: string) => {
  const { state, contents } = useRecoilValueLoadable(getSickList(keyword));
  if (state === "hasError")
    return { sickData: [], stateText: "κ²μ μ€ν¨π₯ λ€μ μλν΄μ£ΌμΈμ." };
  if (state === "loading")
    return { sickData: [], stateText: "λ‘λ©μ€ μλλ€β³" };
  return { sickData: contents, stateText: "λ°μ΄ν°κ° μμ΅λλ€." };
};

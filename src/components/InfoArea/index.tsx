import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as S from "./styles";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const AreaInfo = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);

    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <S.Container>
      <S.MonthArea>
        <S.MonthArrow onClick={handlePrevMonth}>⬅️</S.MonthArrow>
        <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
        <S.MonthArrow onClick={handleNextMonth}>➡️</S.MonthArrow>
      </S.MonthArea>
      <S.ResumeArea>
        <ResumeItem title={"Receitas"} value={income} />
        <ResumeItem title={"Despesas"} value={expense} />
        <ResumeItem
          color={income - expense < 0 ? "red" : "green"}
          title={"Balanço"}
          value={income - expense}
        />
      </S.ResumeArea>
    </S.Container>
  );
};

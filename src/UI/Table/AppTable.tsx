import { ReactNode } from "react";
import { IAddress, ICompany, IUser } from "../../types/IUser";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./AppTable.module.scss";

export const AppTable = ({ data }: { data: IUser[] }) => {
  //? рекурсивная функция для рендера многослойного объекта
  const renderObjectInfo = (objectInfo: IAddress | ICompany): ReactNode => {
    return (
      <ul>
        {Object.values(objectInfo).map((eachInfo) => {
          if (typeof eachInfo !== "object")
            return <li key={eachInfo}>{eachInfo}</li>;
          renderObjectInfo(eachInfo);
        })}
      </ul>
    );
  };

  if (!data.length) {
    return <ErrorMessage message="Нет пользователей!" isError />;
  }

  return (
    <table className={styles.AppTable}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((head) => (
            //? рендер названия каждого столбца
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          //? рендер каждой строки (пользователя)
          <tr key={item.id}>
            {Object.values(item).map((info) => {
              if (typeof info !== "object") return <td key={info}>{info}</td>;
              return (
                <td className="objectTD" key={Object.keys(info)[0]}>
                  {renderObjectInfo(info)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

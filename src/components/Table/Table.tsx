import { ReactNode } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IAddress, ICompany } from "../../models/IUser";
import classes from "./Table.module.scss";

export const Table = () => {
  const { sortedAndSearchedUsers } = useTypedSelector(
    (state) => state.userSlice
  );

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

  if (!sortedAndSearchedUsers.length) {
    return <h1 className="error-message">Нет пользователей!</h1>;
  }

  console.log("Table RENDER");

  return (
    <table className={classes.AppTable}>
      <thead>
        <tr>
          {Object.keys(sortedAndSearchedUsers[0]).map((head) => (
            //? рендер названия каждого столбца
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedAndSearchedUsers.map((user) => (
          //? рендер каждой строки (пользователя)
          <tr key={user.id}>
            {Object.values(user).map((info) => {
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

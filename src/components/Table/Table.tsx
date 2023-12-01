import { ReactNode } from "react";
import { IAddress, ICompany, IUser } from "../../models/IUser";
import classes from "./Table.module.scss";

interface ITableProps {
  users: IUser[];
}

export const Table = ({ users }: ITableProps) => {
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

  return (
    <table className={classes.AppTable}>
      <thead>
        <tr>
          {Object.keys(users[0]).map((head) => (
            //? рендер названия каждого столбца
            <th key={head}>{head[0].toUpperCase() + head.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
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

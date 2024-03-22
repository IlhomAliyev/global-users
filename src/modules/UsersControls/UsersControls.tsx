import styles from "./UsersControls.module.scss";
import { UserLimitSelector } from "./components/UserLimitSelector";
import { UserPagination } from "./components/UserPagination";
import { UserSortSelector } from "./components/UserSortSelector";
import { UsersSearchInput } from "./components/UsersSearchInput";

export const UserControls = () => {
  // console.log("UserControls Render");

  return (
    <>
      <div className={styles.UserControls}>
        <UsersSearchInput />
        <UserLimitSelector />
        <UserSortSelector />
      </div>
      <UserPagination />
    </>
  );
};

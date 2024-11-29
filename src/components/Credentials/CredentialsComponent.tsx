import style from "./CredentialsComponent.module.css";

function Credentials(props: any) {
  const { title, items } = props;

  function loadItems() {
    return items.map((element:any) => {
      return (
        <div className={style.itemContainer}>
          <div className={style.year}>{element.year}</div>
          <div className={style.job}>{element.job}</div>
          <div className={style.place}>{element.place}</div>
        </div>)
    });
  }

  return (
    <div className={style.credentialsContainerGeneral}>
      <div className={style.credentialsInfoContainer}>
        <div className={style.titleContainer}>
          <div className={style.title}> {title}</div>
        </div>
        {loadItems()}
      </div>
    </div>
  );
}

export default Credentials;

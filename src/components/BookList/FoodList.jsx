import s from "./FoodList.module.css";

const FoodList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={item.id} className={s.card}>
          <div className={s.imageWrapper}>
            <img src={item.poster} alt={item.title} className={s.poster} />
            <span className={s.tag}>{item.tag}</span>
          </div>

          <div className={s.content}>
            <h2 className={s.title}>{item.title}</h2>
            <p className={s.description}>{item.description}</p>
          </div>

          <div className={s.header}>
            <img src={item.avatar} alt={item.name} className={s.avatar} />
            <div className={s.userInfo}>
              <h3 className={s.userName}>{item.name}</h3>
              <span className={s.date}>
                {new Date(item.postedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FoodList;

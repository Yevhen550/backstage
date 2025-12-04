import s from "./CardList.module.css";

const CardList = (forbes) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <img
          className={s.cardPoster}
          src="https://source.unsplash.com/600x400/?computer"
          alt="card__image"
        />
      </div>
      <div className={s.cardBody}>
        <span className={s.tag}>Technology</span>
        <h2 className={s.cardTitle}>What is new in 2022 Tech</h2>
        <p className={s.cardText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </p>
      </div>
      <div className={s.cardFooter}>
        <div className={s.userBox}>
          <img
            className={s.avatar}
            src="https://i.pravatar.cc/40?img=1"
            alt="Jane Doe"
          />
          <div>
            <h3 className={s.userName}>Jane Doe</h3>
            <small className={s.date}>2h ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardList;

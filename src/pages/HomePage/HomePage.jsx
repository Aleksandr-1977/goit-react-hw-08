import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Все что вам нужно для управления контактами. Приложение поможет вам
        быстро найти нужный контакт и поддерживать порядок в адресной книге.
      </p>
    </div>
  );
};
export default HomePage;

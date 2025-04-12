import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Все что вам нужно для управления контактами. <br></br> Приложение
        поможет вам быстро найти нужный контакт и поддерживать порядок в
        адресной книге.<br></br> Для входа в свой аккаунт, пожалуйста
        авторизируйтесь.<br></br> Если Вы новый пользователь пройдите
        регистрацию.
      </p>
    </div>
  );
};
export default HomePage;

import { useState } from "react";
import PopupWithForm from "./PopupForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(name,number,email, description);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <PopupWithForm
        name="profile"
        title="Контактные данные"
        onClose={onClose}
        isOpen={isOpen}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="user-name"
          className="popup__text popup__user-name"
          name="name"
          placeholder="Фамилия Имя Отчество"
          required
          onChange={handleChangeName}
          value={name}
        />
        <p className="user-name-error text-error invisible"></p>
        <input
          type="text"
          id="user-info"
          className="popup__text popup__user-info"
          name="about"
          placeholder="Телефон"
          required
          onChange={handleChangeNumber}
          value={number}
        />
        <input
          type="text"
          id="user-info"
          className="popup__text popup__user-info"
          name="about"
          placeholder="E-maile"
          required
          onChange={handleChangeEmail}
          value={email}
        />
         <input
          type="text"
          id="user-info"
          className="popup__text popup__user-description"
          name="about"
          rows="111"
          placeholder='Напишите о себе (своем ребёнке): &#10; класс, чем увлекается, и мы обязательно напишем вам в ответ!'
          required
          onChange={handleChangeDescription}
          value={description}
        />
        <p className="user-info-error text-error invisible"></p>
      </PopupWithForm>
      )
    </>
  );
}

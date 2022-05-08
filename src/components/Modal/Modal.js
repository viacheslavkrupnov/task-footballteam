import React, { useState } from "react";
import s from "./Modal.module.css"

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add(s.activeModal)
  } else {
    document.body.classList.remove(s.activeModal)
  }

  const handleRequestChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return `<h2>Please enter search query<h2/>`;
    }
    setQuery('');
  };

  return (
    <>
      <button onClick={toggleModal} class={s.searchButton}>
          <svg class={s.searchButtonIcon} viewBox="0 0 20 20">
			<path fill="#fff" d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"></path>
		  </svg>
      </button>

      {modal && (
        <div className={s.modal}>
          {/* <div onClick={toggleModal} className={s.overlay}></div> */}
          <div className={s.modalContent}>
          <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search FC Barcelona for teams, players, news and videos"
          value={query}
          onChange={handleRequestChange}
        />
        <button className={s.searchButtonInput} type="submit">
          <span className={s.searchButtonInputContent}>Search now</span>
        </button>
      </form>
            <button className={s.closeModalButton} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
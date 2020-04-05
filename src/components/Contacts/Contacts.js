import React from 'react';

import styles from'./Contacts.module.css';
import PropTypes  from 'prop-types';


const Contacts = ({ myContacts }) => (
    <div className={styles.wrap}>
		<p className={styles.text}> {myContacts} </p>
	</div>
)

Contacts.defaultProps = {
    myContacts: "Меня можно найти по ссылке: https://whs.getcourse.ru/pl/27619654 "
}

Contacts.propTypes = {
	myContacts: PropTypes.string
}

export default Contacts;

import React from 'react';

import PropTypes  from 'prop-types';
import styles from'./About.module.css';


const About = ({ aboutMyself }) => (
	<div className={styles.wrap}>
		<p className={styles.text}> {aboutMyself} </p>
	</div>
)

About.defaultProps = {
	aboutMyself: "Привет всем, меня зовут Кристина"
}

About.propTypes = {
	aboutMyself: PropTypes.string
}

export default About;

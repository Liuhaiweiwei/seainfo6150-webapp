import React from 'react';
import PropTypes from 'prop-types'
import styles from "./SlugButton.module.css";

const SlugButton = (props) => {
    const article=props.article;
  return (
            <button className={styles.button} onClick={() => alert(`${article.slug}`)}>
                {article.author}
            </button>
  );
}

SlugButton.propTypes = {
    articles: PropTypes.array.isRequired
};

export default SlugButton;


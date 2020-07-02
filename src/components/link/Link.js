import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { url, title } = props.link;
  return (
    <div>
      <p>
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">
              {title}
              <a href={url} className="card-link" target="_blank">
                <span style={{ color: 'grey' }}>({url})</span>
              </a>
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default Link;

import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import Link from './Link';
import { connect } from 'react-redux';
import { getLinks } from '../../store/actions/link.actions';

// import { Consumer } from '../../store/context';

class Links extends Component {
  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    const { links } = this.props;
    return (
      <React.Fragment>
        {!links.length ? (
          <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
        ) : (
          <div>
            {links.map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  getLinks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    links: state.link.links,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLinks: () => dispatch(getLinks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Links);

// when using react context
// render() {
//   return (
//     <Consumer>
//       {(value) => {
//         return (
//           <React.Fragment>
//             {!value.links.length ? (
//               <Loader
//                 type="ThreeDots"
//                 color="#00BFFF"
//                 height={80}
//                 width={80}
//               />
//             ) : (
//               <div>
//                 {value.links.map((link) => (
//                   <Link key={link.id} link={link} />
//                 ))}
//               </div>
//             )}
//           </React.Fragment>
//         );
//       }}
//     </Consumer>
//   );
// }

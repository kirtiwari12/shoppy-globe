import PropTypes from "prop-types";

export const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

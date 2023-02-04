import React from "react";


function MoviePosters(props) {
    return (
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {props.children}
        </div>
      </div>
    );
  };

export default MoviePosters;
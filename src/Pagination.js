import React from "react";

const updateOnDataChange = (prevProps, nextProps) => {
  if (nextProps.data[0]?._id === prevProps.data[0]?._id) {
    return true;
  }
};

const Pagination = React.memo(
  ({ data, lastId, prevLastId, setLastId, hasNextPage }) => {
    const [lastItem = {}] = [...data].reverse();
    const { _id: nextLastId } = lastItem;

    const onPrevClick = () => setLastId(prevLastId);
    const onNextClick = () => setLastId(nextLastId);

    return (
      <div className="flex w-full justify-between p-4">
        <div>{lastId && <button onClick={onPrevClick}>Previous</button>}</div>
        <div>{hasNextPage && <button onClick={onNextClick}>Next</button>}</div>
      </div>
    );
  },
  updateOnDataChange
);

export default Pagination;

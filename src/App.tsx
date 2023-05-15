import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App({ propValue }: any) {
  const [count, setCount] = useState(0);
  const [propValueSt, setPropValueSt] = useState(propValue);

  const prevCountRef: any = useRef();

  useEffect(() => {
    console.log("componentDidMount");

    return () => console.log("componentWillUnmount");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  useEffect(() => {
    setPropValueSt((prevProp: any) => {
      console.log("getDerivedStateFromProps", prevProp, propValueSt);
      return null;
    });
  }, [propValue]);

  useEffect(() => {
    prevCountRef.current = count;
  });

  const getSnapshotBeforeUpdate = () => {
    return prevCountRef.current;
  };

  useEffect(() => {
    console.log("getSnapshotBeforeUpdate", getSnapshotBeforeUpdate());
  }, [getSnapshotBeforeUpdate]);

  return (
    <>
      <h2>Replicate React Lifecycle functions in Functional components</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default React.memo(App); // console.log("shouldComponentUpdate")

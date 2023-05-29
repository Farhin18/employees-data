import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  const [Show, setShow] = useState("Hide");

  const [showView, setShowView] = useState("Hide");
  const [evenOdd, setEvenOdd] = useState("all");

  useEffect(() => {
    console.log("SHow:::", Show);
  }, [Show]);

  //to show the list
  const handleChange = () => {
    if (Show == "Show") {
      setShow("Hide");
    }
    if (Show == "Hide") {
      setShow("Show");
    }
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function sort(e) {
    const type = e % 2 === 0 ? "even" : "odd";
    console.log(`${e} is ${type}`);
  }
  const no = numbers.forEach(sort);

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table id="demo" Table></Table>
        <Link className="c-grid gap-2 ">
          <Button onClick={() => handleChange()}>{showView}</Button>
        </Link>

        {Show == "Hide" ? (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {Employees && Employees.length > 0
                ? Employees.map((item, index) => {
                    // console.log("item:", item);
                    // console.log("index:", index);\
                    if (evenOdd == "even") {
                      return item.id % 2 === 0 ? (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.Name}</td>
                          <td>{item.Age}</td>
                          <td>{item.Designation}</td>
                        </tr>
                      ) : (
                        <></>
                      );
                    }

                    if (evenOdd == "odd") {
                      return item.id % 2 !== 0 ? (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.Name}</td>
                          <td>{item.Age}</td>
                          <td>{item.Designation}</td>
                        </tr>
                      ) : (
                        <></>
                      );
                    }

                    if (evenOdd == "all") {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.Name}</td>
                          <td>{item.Age}</td>
                          <td>{item.Designation}</td>
                        </tr>
                      );
                      <></>;
                    }
                  })
                : "Employee not found"}
            </tbody>
          </Table>
        ) : (
          <p>No data found</p>
        )}

        <Button size="sm" onClick={() => setEvenOdd("even")}>
          Even
        </Button>

        <Button size="sm" onClick={() => setEvenOdd("odd")}>
          Odd
        </Button>

        <Button size="sm" onClick={() => setEvenOdd("all")}>
          All
        </Button>
      </div>
    </Fragment>
  );
}

export default Home;

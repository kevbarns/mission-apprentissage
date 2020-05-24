import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container } from "reactstrap";

import { fetchCatalogue } from "../../redux/catalogue-services/catalogueAction";
import Breadcumb from "../../components/Breadcrumb";
import Card from "../../components/Card";

import "./services.css";

export default () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.services);

  React.useEffect(() => {
    dispatch(fetchCatalogue());
  }, [dispatch]);

  return error ? (
    <Redirect to="/404" />
  ) : (
    <div className="page catalogue-services">
      <Container className="mt-5 mb-5">
        <Row>
          <Breadcumb />
          <Col xs="12">
            <h3>
              <span className="icon-esd-catalog" />
              Catalogue des Services
            </h3>
            <hr className="mt-0" />
            <p className="font-weight-light">
              Vous trouverez ici l'ensemble des services référencés, la documentation associés et les modalités de
              souscription
            </p>
          </Col>
        </Row>
        <Row className="ml-0 pt-2">
          <Col xs="12" className="pl-5 border-left-custom">
            <p className="font-weight-bold pb-3">APPRENTISSAGE</p>
            {loading && <p>Chargement des services en cours</p>}
            <Row>
              {items.length > 0 &&
                items.map((item, key) => (
                  <Col key={key} xs="12" sm="12" md="6" lg="4" className="my-2">
                    <Card {...item} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

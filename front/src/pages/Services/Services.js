import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import {} from "reactstrap";

import { fetchCatalogue } from "../../redux/catalogue-services/catalogueAction";
import "./services.css";

const Carte = ({ nom, version, description, lien, miniature }) => (
  <Card className="h-100">
    <div className="d-flex justify-content-center">
      <CardImg  src={miniature} alt="logo-service-apprentissage" className="rounded-circle service-image mt-4" />
    </div>
    <CardBody>
      <CardTitle>{nom}</CardTitle>
      <CardSubtitle>{version}</CardSubtitle>
      <hr />
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

const Fil = () => (
  <Breadcrumb tag="nav" listTag="div">
    <BreadcrumbItem tag="a" href="#">
      Home
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Catalogue des services</BreadcrumbItem>
  </Breadcrumb>
);

const Services = () => {
  const { items, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalogue());
  }, []);

  return (
    <div className="page catalogue-services">
      <Container className="mt-5">
        <Row>
          <Fil />
          <Col xs="12" className="">
            <h2>
              <span className="icon-esd-catalog"></span>
              Catalogue des services
            </h2>
            <hr className="mt-0" />
            <p>
              Vous trouverez ici l'ensemble des services référencés, la documentation associés et les modalités de
              souscription
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="border-left border-primary">
            <p>APPRENTISSAGE</p>
            {loading ? <p>Chargement en cours</p> : null}
            <Row>
              {items
                ? items.map((item) => (
                    <Col xs="6" sm="4" className="my-2">
                      <Carte {...item} />
                    </Col>
                  ))
                : null}
            </Row>
            {/* {items.map((item) => {})} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

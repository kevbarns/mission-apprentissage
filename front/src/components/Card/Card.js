import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button, CardFooter } from "reactstrap";

import "./card.css";

export default ({ nom, version, description, lien, miniature }) => (
  <Card className="h-100 border-0">
    <div className="d-flex justify-content-center">
      <CardImg src={miniature} alt="logo-service-apprentissage" className="rounded-circle shadow-sm bg-white service-image mt-4" />
    </div>
    <CardBody>
      <CardTitle className="font-weight-normal">{nom}</CardTitle>
      <CardSubtitle className="font-weight-light pb-1 d-inline-flex mb-3">
        {version}
      </CardSubtitle>
      <CardText className="font-weight-light">{description}</CardText>
    </CardBody>
    <CardFooter className="text-center">
      <Button className="mt-2" href={lien} target="_blank">
        Accéder au Service
      </Button>
    </CardFooter>
  </Card>
);

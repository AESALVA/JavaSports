import { Container, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/management.css";
import { useState } from "react";
import Search from "./Seeker";

const TableManagement = ({ view, mockSections, mocksUsers }) => {
  let columnTwo;
  let columnThree;
  let columnFour;
  let infoTable = [{}];
  if (view === "news") {
    columnTwo = "Noticia";
    columnThree = "Categoria";
    infoTable = mockSections;
  } else {
    columnTwo = "Nombre completo";
    columnThree = "Rol";
    infoTable = mocksUsers; //filtrar por role administrativo para la otra tabs
  }
  const MockArticles = [
    {
      id: "1",
      categories: "football",
      title: "Gabriel Jesus is not the perfect",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "2",
      categories: "football",
      title: "El mundial se acerca",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "3",
      categories: "football",
      title: "Di maria no jugará en el primer partido del mundial",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "4",
      categories: "football",
      title: "Messi ya está en Qatar con su familia",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "5",
      categories: "football",
      title: "River salió campeon.",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "6",
      categories: "football",
      title: "No se que poner aca",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "7",
      categories: "football",
      title: "El mundial comienza en noviembre",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "8",
      categories: "football",
      title: "Boca jugó contra defensa y le ganó 3-0",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "9",
      categories: "football",
      title: "San lorenzo perdió de local ante Velez",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
    {
      id: "10",
      categories: "football",
      title: "Buenos aires palpita el mundial",
      img: "/img/imgSection.webp",
      imgTitle:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      description:
        "Five-nil. But then, Manchester City just look so strong at the moment. Still: five-nil. But that injury to Bukayo Saka, how much of a blow could that be? Anyway, it was five-nil. But those Nottingham Forest chances, the Jesse Lingard shot where Gabriel Magalhães basically passes it straight to him, one day those are going to cost you. And yet, check the scoreboard, girls and boys: five-nil. It is the eternal gift of Arsenal fans to be able to identify the potential anxiety in virtually any situation, however favourable or triumphant. Pleasure is simply misery deferred. Most people look for crumbs of comfort; Arsenal fans look for crumbs of concern, scan the fixture list for oncoming hazards, scan every horizon for grey clouds. And so, even a routine and rampant 5-0 victory comes with its own quantum of unease.",
      imgTwo: "/img/imgSection2.webp",
      synopsis:
        "Of course, as anyone who has seen Jesus play will be able to tell you, this is not all you get. One of the reasons it feels unfair judging Jesus by the output of a conventional striker is that his input is not that of a conventional striker. Of his 72 touches, only 16 came in the Forest penalty area. Thirteen were in his own half. The vast majority, in fact, were on the left wing, with another little cluster around the left edge of the centre circle. He attempted more tackles than any other Arsenal player. Jesus is, in effect, a ball-winning wide midfielder who does striking for a little extra cash.",
      important: "true",
    },
  ];
  const viewArticle = (article) => {
    console.log(article.id);
  };

  return (
    <>
      <div className="d-flex flex-column ">
        {/* BOTONERA DE LA TABLA */}
        <div className="table-header-administrative d-flex  justify-content-end my-3">
          {/* BOTONERA CON BUSCADOR */}
          <Button className="btn-gray btn-gray-border" size="sm">
            <span className="me-1 d-none d-md-inline-block">Agregar</span>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Form size="sm" className="d-flex mx-2">
            <Form.Control
              type="text"
              placeholder="Buscar"
              className=""
              aria-label="Search"
            />
          </Form>
        </div>
        {/* TABLA INFORMATIVA */}
        <div className="table-administrative">
          <Table hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>{columnTwo}</th>
                <th>{columnThree}</th>
              </tr>
            </thead>
            <tbody>
              {view === "news"
                ? MockArticles.map((article, i) => (
                    <tr id={i} onClick={(e) => viewArticle(article)}>
                      <td>{article.id}</td>
                      <td>{article.title}</td>
                      <td>{article.categories}</td>
                    </tr>
                  ))
                : mocksUsers.map((article, i) => (
                    <tr id={i} onClick={(e) => viewArticle(article)}>
                      <td>{article.id}</td>
                      <td>{article.user}</td>
                      <td>{article.role}</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TableManagement;

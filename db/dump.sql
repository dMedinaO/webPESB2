-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: pesb2DB
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `integrante`
--

DROP TABLE IF EXISTS `integrante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `integrante` (
  `idintegrante` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `posicion` varchar(45) NOT NULL,
  `correo` varchar(450) NOT NULL,
  `linkedin` varchar(450) NOT NULL,
  `scholarProfile` varchar(450) NOT NULL,
  `researchGateProfile` varchar(450) NOT NULL,
  `fotoPrincipal` varchar(45) NOT NULL,
  `descripcion` varchar(4500) NOT NULL,
  PRIMARY KEY (`idintegrante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `integrante`
--

LOCK TABLES `integrante` WRITE;
/*!40000 ALTER TABLE `integrante` DISABLE KEYS */;
INSERT INTO `integrante` VALUES (1579896554,'Ãlvaro Olivera-Nappa','Boss','aolivera@ing.uchile.cl','linkedin','-','-','aolivera.jpg','Boss'),(1579958133,'David Medina-Ortiz','PhD Student','david.medina@cebib.cl','-','-','-','dmedina.png','Developer software, data science, machine learning and pattern recognition applied to protein engineering ');
/*!40000 ALTER TABLE `integrante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyecto` (
  `idproyecto` int(11) NOT NULL,
  `nombreProyecto` varchar(450) NOT NULL,
  `descripcionProyecto` varchar(4500) NOT NULL,
  `financiamiento` varchar(450) NOT NULL,
  `encargadoProyecto` int(11) NOT NULL,
  `namePictureProject` varchar(45) NOT NULL,
  PRIMARY KEY (`idproyecto`),
  KEY `fk_proyecto_integrante1_idx` (`encargadoProyecto`),
  CONSTRAINT `fk_proyecto_integrante1` FOREIGN KEY (`encargadoProyecto`) REFERENCES `integrante` (`idintegrante`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (1579964872,'Demo project 2','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','FB-0001 Etapa 2',1579958133,'IMG-20180923-WA0006.jpg');
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `publicacion` (
  `idpublicacion` int(11) NOT NULL,
  `descripcionPublicacion` varchar(20000) DEFAULT NULL,
  `estadoPublicacion` varchar(45) NOT NULL,
  `linkAcceso` varchar(450) DEFAULT NULL,
  `autorPrincipal` int(11) NOT NULL,
  PRIMARY KEY (`idpublicacion`),
  KEY `fk_publicacion_integrante_idx` (`autorPrincipal`),
  CONSTRAINT `fk_publicacion_integrante` FOREIGN KEY (`autorPrincipal`) REFERENCES `integrante` (`idintegrante`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1579962309,'J. Torres-Almonacid, D. Medina-Ortiz, D. Alvarez-Saravia, J. Ãguila-Guerrero, Ã. Olivera-Nappa and M. Navarrete, \"Pattern recognition on antigen-antibody interactions from protein microarrays based on data mining and bioinformatics analysis,\" 2019 38th International Conference of the Chilean Computer Science Society (SCCC), Concepcion, Chile, 2019, pp. 1-8. doi: 10.1109/SCCC49216.2019.8966421 keywords: {Protein Microarrays;Antigen-Antibody Interaction;Data Mining;Machine Learning}, URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8966421&isnumber=8966388','Published','https://ieeexplore.ieee.org/document/8966421',1579958133);
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-26 23:35:45

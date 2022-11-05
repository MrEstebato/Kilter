import { Flex, Heading, Text, Button, HStack, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kilter Health</title>
        <meta name="description" content="Kilter App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Flex>
          <Heading as="h1" size="4xl" mb={8}>
            Bienvenido a <span className={styles.span}>bilter </span>
          </Heading>
        </Flex>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Sobre nosotros &rarr;</h2>
            <p>
              Descubre qué es Bilter y cuál es la necesidad que estamos
              atacando.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Aprende &rarr;</h2>
            <p>
              Aprende cómo usar Bilter y todo lo que tenemos preparado para ti.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>FAQ &rarr;</h2>
            <p>Responde las preguntas más frecuentes en un solo lugar.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Contacto &rarr;</h2>
            <p>Contáctanos y te resolveremos todas tus dudas.</p>
          </a>
        </div>
        <a href="#" mt={8}>
          <Flex gap={8}>
            {/* <a href="https://www.apple.com/app-store/" target="_blank"> */}
            <Image
              src="/Apple.svg"
              alt="Descargar aplicacion apple"
              width={172}
              height={36}
            ></Image>
            {/* </a>
            <a href="https://play.google.com/" target="_blank"> */}
            <Image
              src="/google-play-badge.png"
              alt="Descargar aplicacion android"
              width={192}
              height={36}
            ></Image>
            {/* </a> */}
          </Flex>
        </a>
      </main>
    </div>
  );
}

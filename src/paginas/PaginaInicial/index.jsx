import React from "react";
import styles from "./PaginaInicial.module.scss"
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Banner from "../../componentes/Banner";
import Rodape from "../../componentes/Rodape";

export default function PaginaInicial() {
    return (
        <> {/* <> é o React Fragment, sem função semântica, serve apenas para encapsular outros componentes no return */}
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Rodape />
        </>
    );
}

import React from "react"
import { Icone } from ".."
import ThemaOn from "../../../assets/images/themaOn.svg"
import ThemaOff from "../../../assets/images/themaOff.svg"






const claro = <Icone src={ThemaOn} alt="Tema claro" />

const escuro = <Icone src={ThemaOff} alt="Tema escuro" />
export default (({thema})=> (thema ? claro : escuro))
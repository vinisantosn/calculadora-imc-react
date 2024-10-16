import { useState } from "react";
import './styles.css'

function Calculadora() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  

  function calculaIMC() {
    const alturaEmCm = altura / 100;
    const imc = peso / Math.pow(alturaEmCm, 2);
    return imc.toFixed(1);
  }
  function classificaIMC(){
    const resultado = calculaIMC();
    const magrezaGrave = resultado<16
    const magrezaModerada = (resultado>=16) && (resultado<=16.9)
    const magrezaLeve = (resultado>=17) && (resultado<=18.5)
    const pesoIdeal = (resultado>=18.6) && (resultado<=24.9)
    const sobrepeso = (resultado>=25) && (resultado<=29.9)
    const obesidadeGrauI = (resultado>30) && (resultado<=34.9)
    const obesidadeGrauII = (resultado>=35) && (resultado<=39.9)
    const obesidadeGrauIII = (resultado>40) 
    if(magrezaGrave){
        return `[Sendo resultados menores que 16]  O paciente com o IMC ${resultado} encontra-se classificado em MAGREZA GRAVE.`
    } else if(magrezaModerada){
        return `[Sendo resultados entre 16 e 16,9]  O paciente com o IMC ${resultado} encontra-se classificado em MAGREZA MODERADA.`
    } else if(magrezaLeve){
        return `[Sendo resultados entre 17 e 18,5]  O paciente com o IMC ${resultado} encontra-se classificado em MAGREZA LEVE.`
    }
     else if(pesoIdeal){
        return `[Sendo resultados entre 17 e 18,5]  O paciente com o IMC ${resultado} encontra-se classificado em PESO IDEAL.`
    }
     else if(sobrepeso){
        return `[Sendo resultados entre 18,6 e 24,9]  O paciente com o IMC ${resultado} encontra-se classificado em SOBREPESO.`
    }
     else if(obesidadeGrauI){
        return `[Sendo resultados entre 25 e 29,9]  O paciente com o IMC ${resultado} encontra-se classificado em OBESIDADE GRAU I.`
    }
     else if(obesidadeGrauII){
        return `[Sendo resultados entre 35 e 39,9 ]  O paciente com o IMC ${resultado} encontra-se classificado em OBESIDADE GRAU II.`
    }
     else if(obesidadeGrauIII){
        return `[Sendo resultados maiores do que 40]  O paciente com o IMC ${resultado} encontra-se classificado em OBESIDADE GRAU III.`
    }
        else{
        return `PACIENTE NÃO CLASSIFICADO.`
    }
    
  }
  return (
    <>
      <form>
        <label className="custom-label" htmlFor="altura">Informe sua altura (cm)</label>
        <input
          type="number"
          placeholder="Altura"
          id="altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="peso">Informe seu peso (kg)</label>
        <input
          type="number"
          placeholder="Peso"
          id="peso"
          onChange={(e) => setPeso(e.target.value)}
        />
      </form>
      <div className="resultado">{calculaIMC()}</div>
      <div className="classificacao">{classificaIMC()}</div>
      
    </>
  );
}
export default Calculadora;
